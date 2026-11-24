import { contact } from "@/content/site";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";

/** Organization structured data for search engines, built from facts already shown on the site. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo/logo-color.png`,
    description: siteDescription,
    email: contact.email,
    telephone: contact.phones[0],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
