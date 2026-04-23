import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'By Ansari';
const SITE_URL  = 'https://byansari.dev';
const SITE_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEO component — renders all critical meta/OG/Twitter tags.
 * Props:
 *   title         — Page title (appended with site name)
 *   description   — Meta description (155–160 chars ideal)
 *   keywords      — Comma-separated keyword string
 *   canonicalPath — Canonical path e.g. "/services"
 *   ogImage       — Optional custom OG image URL
 */
export default function SEO({
  title,
  description,
  keywords = '',
  canonicalPath = '/',
  ogImage = SITE_IMAGE,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Building the Smart Digital Future`;
  const canonical = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="author" content="By Ansari" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": SITE_NAME,
        "url": SITE_URL,
        "description": description,
        "sameAs": [
          "https://linkedin.com/in/byansari",
          "https://github.com/byansari"
        ],
        "serviceType": [
          "Website Development",
          "Web Application Development",
          "Data Analysis",
          "Machine Learning",
          "Generative AI",
          "RAG Solutions"
        ]
      })}</script>
    </Helmet>
  );
}
