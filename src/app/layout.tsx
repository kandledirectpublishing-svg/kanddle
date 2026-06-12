import type { Metadata } from "next";
import { Open_Sans, Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kandledirectpublishing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kandle Direct: Professional Book Publishing Services",
    template: "%s | Kandle Direct Publishing",
  },
  alternates: {
    canonical: siteUrl,
  },
  description: "Affordable book publishing services with 100% royalties. Professional book formatting, cover design, and marketing. No hidden fees. Fast book production.",
  keywords: [
    // Primary Keywords
    "book publishing services",
    "self-publishing company",
    "professional book publishing",
    // Service-Based Keywords
    "affordable publishing packages",
    "book formatting services",
    "publishing team for authors",
    "author royalties",
    // Benefit-Driven Keywords
    "keep 100% of royalties",
    "no hidden publishing fees",
    "fast book production",
    "multi-device book testing",
    // Trust & Authority Keywords
    "publishing since 2011",
    "experienced publishing team",
    "proven track record authors",
    // Additional SEO Keywords
    "Amazon KDP",
    "self-publishing",
    "book marketing",
    "cover design",
    "ebook publishing"
  ],
  authors: [{ name: "Kandle Direct Publishing" }],
  creator: "Kandle Direct Publishing",
  publisher: "Kandle Direct Publishing",
  icons: {
    icon: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
    shortcut: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
    apple: "/images/Kandle Direct Publishing-Logo/Fav Icon .svg",
  },
  openGraph: {
    title: "Kandle Direct: Professional Book Publishing Services",
    description: "Affordable book publishing services with 100% royalties. Professional book formatting, cover design, and marketing. No hidden fees. Fast book production.",
    url: siteUrl,
    siteName: "Kandle Direct Publishing",
    images: [
      {
        url: "/images/Kandle Direct Publishing-Logo/Kandle Direct Publishing-Logo-01.jpg",
        width: 1200,
        height: 630,
        alt: "Kandle Direct Publishing Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kandle Direct: Professional Book Publishing Services",
    description: "Affordable book publishing services with 100% royalties. Professional book formatting, cover design, and marketing. No hidden fees. Fast book production.",
    images: ["/images/Kandle Direct Publishing-Logo/Kandle Direct Publishing-Logo-01.jpg"],
    creator: "@kandledirect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {/* JSON-LD: Organization + LocalBusiness structured data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              name: 'Kandle Direct Publishing',
              url: 'https://www.kandledirectpublishing.com',
              logo: 'https://www.kandledirectpublishing.com/logo.png',
              description:
                'Professional book publishing services — editing, cover design, formatting, global distribution, and marketing. Authors keep 100% of royalties.',
              telephone: '+44-7922-656521',
              email: 'info@kandledirectpublishing.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '173 Dallow Rd',
                addressLocality: 'Luton',
                postalCode: 'LU1 1NX',
                addressCountry: 'GB',
              },
              sameAs: [
                'https://www.facebook.com/kandledirectpublishing/',
                'https://www.instagram.com/kandledirectpublishing/',
                'https://www.linkedin.com/company/kandle-direct-publishing/',
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Book Publishing Services',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${raleway.variable} ${montserrat.variable} antialiased font-sans bg-background text-primary selection:bg-secondary selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

