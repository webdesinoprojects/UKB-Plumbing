"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { Menu, X, Phone, ChevronDown, MapPin, Calendar, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cityLinks = [
  { name: "Southampton", href: "/areas-we-cover", slug: "southampton" },
  { name: "New Forest", href: "/areas-we-cover/new-forest", slug: "new-forest" },
  { name: "Winchester", href: "/areas-we-cover/winchester", slug: "winchester" },
  { name: "Salisbury", href: "/areas-we-cover/salisbury", slug: "salisbury" },
  { name: "Eastleigh", href: "/areas-we-cover/eastleigh", slug: "eastleigh" },
];

const serviceLinks = [
  { name: "Blocked Drains", href: "/services/blocked-drains", slug: "blocked-drains" },
  { name: "Boiler Installation", href: "/services/boiler-installation", slug: "boiler-installation" },
  { name: "Boiler Repair", href: "/services/boiler-repair", slug: "boiler-repair" },
  { name: "Emergency Plumber", href: "/services/emergency-plumber", slug: "emergency-plumber" },
  { name: "Water Leak Repair", href: "/services/water-leakage-and-repair", slug: "water-leakage-and-repair" },
  { name: "Central Heating & Radiators", href: "/services/central-heating-radiators", slug: "central-heating-radiators" },
  { name: "Landlord Gas Safety", href: "/services/landlord-gas-safety-certificate", slug: "landlord-gas-safety-certificate" },
  { name: "Power Flushing", href: "/services/power-flushing-hard-water", slug: "power-flushing-hard-water" },
];

const Header = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeMenuRef = useRef<HTMLButtonElement>(null);

  // Prevent Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAreasOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    closeMenuRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !mobileMenuRef.current) return;

      const focusable = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter((element) => !element.hasAttribute("hidden"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Active checks based on mounted state
  const isHomeActive = mounted && pathname === "/";
  const isServicesRouteActive = mounted && pathname?.startsWith("/services");
  const isPortfolioActive = mounted && pathname === "/portfolio";
  const isBlogsActive = mounted && pathname === "/blogs";
  const isAreasRouteActive = mounted && pathname?.startsWith("/areas-we-cover");

  return (
    <>
      <header
        className={cn(
          "fixed top-[40px] left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5"
            : "bg-white py-2.5 sm:py-3 md:py-4"
        )}
      >
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link prefetch={false} href="/" className="flex items-center flex-shrink-0">
            <img
              src="/lovable-uploads/ukb-plumbing-logo.png"
              alt="UKB plumbing"
              width="180"
              height="52"
              className="h-8 sm:h-11 md:h-13 w-auto object-contain transition-all duration-300"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-ukb-darkblue text-[16px] font-medium">
            {/* Home */}
            <Link prefetch={false}
              href="/"
              className={cn(
                "relative py-1 transition-colors group",
                isHomeActive ? "text-ukb-blue font-semibold" : "hover:text-ukb-blue font-medium"
              )}
            >
              Home
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[2.5px] bg-ukb-blue transition-all duration-300",
                  isHomeActive ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              ref={servicesDropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className={cn(
                  "relative py-1 flex items-center gap-1.5 focus:outline-none cursor-pointer transition-colors group text-[16px]",
                  isServicesRouteActive ? "text-ukb-blue font-semibold" : "hover:text-ukb-blue font-medium"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-300",
                    isServicesOpen && "rotate-180",
                    isServicesRouteActive && "text-ukb-blue"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2.5px] bg-ukb-blue transition-all duration-300",
                    isServicesRouteActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2 w-64 transition-all duration-200 ease-out z-50",
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                )}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden text-left">
                  <div className="h-1 bg-gradient-to-r from-ukb-blue via-ukb-darkblue to-ukb-blue" />
                  <div className="p-2">
                    <ul className="space-y-1">
                      {serviceLinks.map((service) => {
                        const isServiceActive = mounted && pathname === service.href;
                        return (
                          <li key={service.slug} className="w-full text-left">
                            <Link prefetch={false}
                              href={service.href}
                              onClick={() => setIsServicesOpen(false)}
                              className={cn(
                                "flex items-center justify-start gap-2.5 w-full transition-all duration-200 py-2 px-2.5 rounded-lg group/item font-medium whitespace-nowrap text-left",
                                isServiceActive
                                  ? "bg-ukb-blue/10 text-ukb-blue font-semibold"
                                  : "text-gray-700 hover:text-ukb-blue hover:bg-ukb-blue/5"
                              )}
                            >
                              <div
                                className={cn(
                                  "w-6 h-6 rounded-md flex items-center justify-center transition-colors flex-shrink-0",
                                  isServiceActive
                                    ? "bg-ukb-blue text-white"
                                    : "bg-ukb-blue/10 group-hover/item:bg-ukb-blue"
                                )}
                              >
                                <Wrench
                                  size={13}
                                  className={cn(
                                    "transition-colors",
                                    isServiceActive
                                      ? "text-white"
                                      : "text-ukb-blue group-hover/item:text-white"
                                  )}
                                />
                              </div>
                              <span className="tracking-wide text-[14px] font-medium whitespace-nowrap text-left">
                                {service.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <Link prefetch={false}
              href="/portfolio"
              className={cn(
                "relative py-1 transition-colors group",
                isPortfolioActive ? "text-ukb-blue font-semibold" : "hover:text-ukb-blue font-medium"
              )}
            >
              Portfolio
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[2.5px] bg-ukb-blue transition-all duration-300",
                  isPortfolioActive ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>

            {/* Blogs */}
            <Link prefetch={false}
              href="/blogs"
              className={cn(
                "relative py-1 transition-colors group",
                isBlogsActive ? "text-ukb-blue font-semibold" : "hover:text-ukb-blue font-medium"
              )}
            >
              Blogs
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[2.5px] bg-ukb-blue transition-all duration-300",
                  isBlogsActive ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>

            {/* Areas We Cover Dropdown */}
            <div
              className="relative py-2"
              ref={dropdownRef}
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsAreasOpen((prev) => !prev)}
                className={cn(
                  "relative py-1 flex items-center gap-1.5 focus:outline-none cursor-pointer transition-colors group text-[16px]",
                  isAreasRouteActive ? "text-ukb-blue font-semibold" : "hover:text-ukb-blue font-medium"
                )}
              >
                <span>Areas we cover</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-300",
                    isAreasOpen && "rotate-180",
                    isAreasRouteActive && "text-ukb-blue"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2.5px] bg-ukb-blue transition-all duration-300",
                    isAreasRouteActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2 w-64 transition-all duration-200 ease-out z-50",
                  isAreasOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                )}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden text-left">
                  <div className="h-1 bg-gradient-to-r from-ukb-blue via-ukb-darkblue to-ukb-blue" />
                  <div className="p-2">
                    <ul className="space-y-1">
                      {cityLinks.map((city) => {
                        const isCityActive = mounted && pathname === city.href;
                        return (
                          <li key={city.slug} className="w-full text-left">
                            <Link prefetch={false}
                              href={city.href}
                              onClick={() => setIsAreasOpen(false)}
                              className={cn(
                                "flex items-center justify-start gap-2.5 w-full transition-all duration-200 py-2 px-2.5 rounded-lg group/item font-medium whitespace-nowrap text-left",
                                isCityActive
                                  ? "bg-ukb-blue/10 text-ukb-blue font-semibold"
                                  : "text-gray-700 hover:text-ukb-blue hover:bg-ukb-blue/5"
                              )}
                            >
                              <div
                                className={cn(
                                  "w-6 h-6 rounded-md flex items-center justify-center transition-colors flex-shrink-0",
                                  isCityActive
                                    ? "bg-ukb-blue text-white"
                                    : "bg-ukb-blue/10 group-hover/item:bg-ukb-blue"
                                )}
                              >
                                <MapPin
                                  size={13}
                                  className={cn(
                                    "transition-colors",
                                    isCityActive
                                      ? "text-white"
                                      : "text-ukb-blue group-hover/item:text-white"
                                  )}
                                />
                              </div>
                              <span className="tracking-wide text-[14px] font-medium whitespace-nowrap text-left">
                                {city.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us */}
            <Link prefetch={false}
              href="/about"
              className="relative py-1 transition-colors group hover:text-ukb-blue font-medium"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-ukb-blue transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="flex items-center gap-3 ml-2">
              <Link prefetch={false}
                href="/inquiry-form"
                data-tracking-location="desktop_header"
                className="flex items-center gap-2 font-medium bg-ukb-blue text-white py-2 px-4 rounded-md hover:bg-ukb-darkblue transition-all duration-200 shadow-sm text-[16px] tracking-wide"
              >
                <Calendar size={16} className="hidden xl:inline-block" />
                <span>Request a Quote</span>
              </Link>

              <a
                href="tel:07359605766"
                data-tracking-location="desktop_header"
                className="flex items-center gap-2 font-medium bg-ukb-blue text-white py-2 px-4 rounded-md hover:bg-ukb-darkblue transition-all duration-200 shadow-sm text-[16px] tracking-wide"
              >
                <Phone size={16} />
                <span>07359605766</span>
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:07359605766"
              data-tracking-location="mobile_header"
              className="flex items-center gap-1 text-[14px] font-medium bg-ukb-blue text-white py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-md hover:bg-ukb-darkblue transition-colors"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">07359605766</span>
              <span className="sm:hidden text-[12px]">Call</span>
            </a>

            <button
              ref={menuToggleRef}
              className="p-1 rounded-md text-ukb-darkblue hover:bg-gray-100 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed top-0 bottom-0 left-0 right-0 bg-white z-[999] flex flex-col justify-between !items-start !text-left overflow-y-auto lg:hidden transition-all duration-300 ease-in-out px-4 pt-4 pb-6 w-full",
          isMenuOpen
            ? "opacity-100 visible translate-x-0 pointer-events-auto"
            : "opacity-0 invisible translate-x-full pointer-events-none"
        )}
      >
        <div className="w-full !items-start !text-left flex flex-col">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 w-full">
            <Link prefetch={false} href="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/lovable-uploads/ukb-plumbing-logo.png"
                alt="UKB plumbing"
                width="180"
                height="52"
                className="h-7 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </Link>
            <button
              ref={closeMenuRef}
              className="p-1.5 rounded-full text-ukb-darkblue hover:bg-gray-100 transition-colors focus:outline-none"
              onClick={() => {
                setIsMenuOpen(false);
                menuToggleRef.current?.focus();
              }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col space-y-1 !text-left !items-start w-full mt-3">
            <Link prefetch={false}
              href="/"
              className={cn(
                "w-full !text-left font-medium text-[16px] py-2 border-b border-gray-100 transition-colors block",
                isHomeActive ? "text-ukb-blue font-semibold pl-2 border-l-2 border-l-ukb-blue" : "text-ukb-darkblue hover:text-ukb-blue"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="w-full !text-left border-b border-gray-100 py-2 flex flex-col !items-start">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                aria-expanded={isMobileServicesOpen}
                aria-controls="mobile-services-menu"
                className={cn(
                  "w-full !text-left font-medium text-[16px] flex items-center justify-start gap-2 focus:outline-none py-1",
                  isServicesRouteActive ? "text-ukb-blue font-semibold" : "text-ukb-darkblue"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-300 text-ukb-blue",
                    isMobileServicesOpen && "rotate-180"
                  )}
                />
              </button>

              {isMobileServicesOpen && (
                <div id="mobile-services-menu" className="mt-2 pl-3 space-y-1 border-l-2 border-ukb-blue/30 !text-left !items-start flex flex-col w-full">
                  <Link prefetch={false}
                    href="/services"
                    className="w-full !text-left block text-[14px] font-semibold text-ukb-blue py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services →
                  </Link>
                  {serviceLinks.map((service) => {
                    const isServiceActive = mounted && pathname === service.href;
                    return (
                      <Link prefetch={false}
                        key={service.slug}
                        href={service.href}
                        className={cn(
                          "w-full !text-left flex items-center justify-start gap-2 text-[14px] py-1 transition-colors",
                          isServiceActive
                            ? "text-ukb-blue font-semibold"
                            : "text-gray-700 hover:text-ukb-blue"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Wrench size={12} className="text-ukb-blue flex-shrink-0" />
                        <span className="!text-left">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link prefetch={false}
              href="/portfolio"
              className={cn(
                "w-full !text-left font-medium text-[16px] py-2 border-b border-gray-100 transition-colors block",
                isPortfolioActive ? "text-ukb-blue font-semibold pl-2 border-l-2 border-l-ukb-blue" : "text-ukb-darkblue hover:text-ukb-blue"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>

            <Link prefetch={false}
              href="/blogs"
              className={cn(
                "w-full !text-left font-medium text-[16px] py-2 border-b border-gray-100 transition-colors block",
                isBlogsActive ? "text-ukb-blue font-semibold pl-2 border-l-2 border-l-ukb-blue" : "text-ukb-darkblue hover:text-ukb-blue"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>

            <div className="w-full !text-left border-b border-gray-100 py-2 flex flex-col !items-start">
              <button
                type="button"
                onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
                aria-expanded={isMobileAreasOpen}
                aria-controls="mobile-areas-menu"
                className={cn(
                  "w-full !text-left font-medium text-[16px] flex items-center justify-start gap-2 focus:outline-none py-1",
                  isAreasRouteActive ? "text-ukb-blue font-semibold" : "text-ukb-darkblue"
                )}
              >
                <span>Areas We Cover</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-300 text-ukb-blue",
                    isMobileAreasOpen && "rotate-180"
                  )}
                />
              </button>

              {isMobileAreasOpen && (
                <div id="mobile-areas-menu" className="mt-2 pl-3 space-y-1 border-l-2 border-ukb-blue/30 !text-left !items-start flex flex-col w-full">
                  <Link prefetch={false}
                    href="/areas-we-cover"
                    className="w-full !text-left block text-[14px] font-semibold text-ukb-blue py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Covered Regions →
                  </Link>
                  {cityLinks.map((city) => {
                    const isCityActive = mounted && pathname === city.href;
                    return (
                      <Link prefetch={false}
                        key={city.slug}
                        href={city.href}
                        className={cn(
                          "w-full !text-left flex items-center justify-start gap-2 text-[14px] py-1 transition-colors",
                          isCityActive
                            ? "text-ukb-blue font-semibold"
                            : "text-gray-700 hover:text-ukb-blue"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <MapPin size={12} className="text-ukb-blue flex-shrink-0" />
                        <span className="!text-left">{city.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link prefetch={false}
              href="/about"
              className="w-full !text-left font-medium text-[16px] text-ukb-darkblue py-2 border-b border-gray-100 hover:text-ukb-blue transition-colors block"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Link prefetch={false}
              href="/#contact"
              className="w-full !text-left font-medium text-[16px] text-ukb-darkblue py-2 border-b border-gray-100 hover:text-ukb-blue transition-colors block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="w-full space-y-2 pt-3 !items-start !text-left flex flex-col">
          <Link prefetch={false}
            href="/inquiry-form"
            data-tracking-location="mobile_menu"
            className="flex items-center justify-start gap-2 font-medium bg-ukb-blue text-white py-2 px-3 rounded-lg !text-left text-[14px] shadow-md hover:bg-ukb-darkblue transition-colors w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <Calendar size={15} className="flex-shrink-0" />
            <span>Request a Quote</span>
          </Link>

          <a
            href="tel:07359605766"
            data-tracking-location="mobile_menu"
            className="flex items-center justify-start gap-2 font-medium border border-ukb-blue text-ukb-blue py-2 px-3 rounded-lg !text-left text-[14px] hover:bg-ukb-blue hover:text-white transition-colors w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={15} className="flex-shrink-0" />
            <span>Call 07359605766</span>
          </a>

          <div className="flex justify-start items-center gap-3 text-[12px] text-gray-500 pt-1 !text-left w-full">
            <Link prefetch={false} href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link prefetch={false} href="/terms-and-conditions" onClick={() => setIsMenuOpen(false)}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
