import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogArticles, getBlogArticle } from "@/data/blogArticles";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};

  const url = `https://ukbplumbing.co.uk/blogs/${article.slug}`;
  return {
    title: `${article.title} | UKB Plumbing`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const articleUrl = `https://ukbplumbing.co.uk/blogs/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: articleUrl,
    image: "https://ukbplumbing.co.uk/og-image.png",
    author: { "@type": "Organization", name: "UKB Plumbing Ltd" },
    publisher: {
      "@type": "Organization",
      name: "UKB Plumbing Ltd",
      logo: { "@type": "ImageObject", url: "https://ukbplumbing.co.uk/og-image.png" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }, { label: article.title }]} />
      </div>
      <main className="bg-white pb-16">
        <article>
          <header className="bg-[#0a3b7c] py-14 text-white sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="font-bold uppercase tracking-wider text-amber-300">Practical plumbing guide</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{article.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{article.description}</p>
              <p className="mt-6 text-sm text-white/75">
                Published <time dateTime={article.publishedDate}>7 November 2026</time> · {article.readTime}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-4xl space-y-11 px-4 py-14 sm:px-6 lg:px-8">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-3xl font-bold text-ukb-darkblue">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-slate-700">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 pl-6 text-lg text-slate-700">
                    {section.bullets.map((item) => <li key={item} className="list-disc">{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <aside className="rounded-2xl bg-slate-100 p-7 sm:p-9" aria-labelledby="related-service-heading">
              <h2 id="related-service-heading" className="text-2xl font-bold text-ukb-darkblue">Need help with this problem?</h2>
              <p className="mt-3 leading-relaxed text-slate-700">Read how UKB Plumbing assesses this type of work, or contact us with the symptoms and property postcode.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href={article.relatedService.href} className="rounded-lg bg-[#1D3B8A] px-5 py-3 font-bold text-white">{article.relatedService.label}</Link>
                <Link href="/inquiry-form" className="rounded-lg border border-[#1D3B8A] px-5 py-3 font-bold text-[#1D3B8A]">Request a quote</Link>
              </div>
            </aside>

            <p className="border-t border-slate-200 pt-8 text-sm leading-relaxed text-slate-600">
              This guide is general information, not a diagnosis for a particular property. Follow appliance instructions and use appropriately qualified professionals for regulated work.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
