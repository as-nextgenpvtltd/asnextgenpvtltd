import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AS NEXTGEN Pvt Ltd | Digital Engineering & Technology Solutions",
    template: "%s | AS NEXTGEN Pvt Ltd",
  },
  description:
    "AS NEXTGEN Pvt Ltd engineers high-performance web applications, mobile products, enterprise platforms and next-generation digital solutions.",
  keywords: [
    "AS NEXTGEN",
    "software engineering",
    "web development",
    "mobile apps",
    "enterprise software",
    "ERP",
    "SaaS",
    "digital transformation",
    "Hungary",
    "India",
    "internship",
    "student opportunities",
  ],
  authors: [{ name: "AS NEXTGEN Pvt Ltd" }],
  creator: "AS NEXTGEN Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AS NEXTGEN Pvt Ltd",
    title: "AS NEXTGEN Pvt Ltd | Digital Engineering & Technology Solutions",
    description:
      "We engineer high-performance web applications, mobile products, enterprise platforms and next-generation digital solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AS NEXTGEN Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS NEXTGEN Pvt Ltd | Digital Engineering & Technology Solutions",
    description:
      "We engineer high-performance web applications, mobile products, enterprise platforms and next-generation digital solutions.",
    images: ["/og-image.png"],
    creator: "@asnextgen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-void text-foam antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
