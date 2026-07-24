import { useEffect } from "react";

type Breadcrumb = {
  name: string;
  path: string;
};

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "product";
  image?: string;
  breadcrumbs?: Breadcrumb[];
  product?: {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
};

const SITE_NAME = "Mini Dreams";
const DEFAULT_IMAGE = "/favicon.svg";

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function SEO({
  title,
  description,
  path = window.location.pathname,
  type = "website",
  image = DEFAULT_IMAGE,
  breadcrumbs = [],
  product,
}: SEOProps) {
  useEffect(() => {
    const siteUrl =
      import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
      window.location.origin;
    const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
    const imageUrl = image.startsWith("http")
      ? image
      : `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:locale", "fr_BE");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
    setLink("canonical", canonicalUrl);

    const schema: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenue Louise 123",
          postalCode: "1000",
          addressLocality: "Bruxelles",
          addressCountry: "BE",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: siteUrl,
        inLanguage: "fr-BE",
      },
    ];

    if (breadcrumbs.length > 0) {
      schema.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
        })),
      });
    }

    if (product) {
      schema.push({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: [product.image],
        category: product.category,
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: product.price.toString(),
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        },
      });
    }

    let jsonLd = document.head.querySelector<HTMLScriptElement>(
      'script[data-mini-dreams-schema="true"]',
    );
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.type = "application/ld+json";
      jsonLd.dataset.miniDreamsSchema = "true";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": schema });
  }, [breadcrumbs, description, image, path, product, title, type]);

  return null;
}
