import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexaFusion — Multi-Service Platform",
    template: "%s | NexaFusion",
  },
  description:
    "NexaFusion is a dynamic startup offering Website Development, Mobile App Development, UI/UX Design, Digital Marketing, Branding, Content Creation, Interior & Exterior Design, Waterproofing, and Construction.",
  keywords: [
    "web development",
    "app development",
    "UI UX design",
    "digital marketing",
    "branding",
    "content creation",
    "interior design",
    "exterior design",
    "waterproofing",
    "construction services",
    "NexaFusion",
  ],
  authors: [{ name: "NexaFusion" }],
  creator: "NexaFusion",
  metadataBase: new URL("https://www.nexafusion.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nexafusion.com",
    siteName: "NexaFusion",
    title: "NexaFusion — Multi-Service Platform",
    description:
      "Premium digital, design, content, and construction services under one roof.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFusion — Multi-Service Platform",
    description: "Premium digital, design, content, and construction services.",
    creator: "@nexafusion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
