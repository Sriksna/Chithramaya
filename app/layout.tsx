import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Chithramaya & Thalam",
    default: "Chithramaya & Thalam | Premium Creative Studio",
  },
  description: "A premium creative studio offering both precision offsite (Chithramaya) and human onsite (Thalam) visual experiences.",
  keywords: ["Creative Studio", "Photography", "Commercial", "Brand Design", "Podcast Production", "Lifestyle", "Studio"],
  openGraph: {
    title: "Chithramaya & Thalam | Premium Creative Studio",
    description: "A premium creative studio offering both precision offsite and human onsite visual experiences.",
    url: "https://chithramaya.com",
    siteName: "Chithramaya & Thalam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chithramaya & Thalam | Premium Creative Studio",
    description: "A premium creative studio offering both precision offsite and human onsite visual experiences.",
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
  icons: {
    icon: 'data:image/x-icon;base64,',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}
