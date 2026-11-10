import Link from 'next/link'

interface Crumb { label: string; href?: string }

interface BreadcrumbsProps {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb py-4">
      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm">
        {items.map((item, i) => (
          <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
            {item.href ? (
              <Link prefetch={false} href={item.href} itemProp="item" className="text-ukb-darkgray hover:text-ukb-blue transition-colors">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-ukb-darkblue font-medium">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && <span className="text-ukb-darkgray/50">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}