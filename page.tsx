import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Aurelia Table | Luxury Fine Dining, Reservations and Online Ordering";
const siteDescription =
  "A premium restaurant website demo with cinematic dining visuals, interactive menu, WhatsApp ordering, reservation capture, CRM dashboards, local SEO and Google Sheets readiness.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurelia-table.example"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "luxury restaurant website",
    "fine dining reservation",
    "restaurant online ordering",
    "premium restaurant Mumbai",
    "Google Sheets restaurant CRM",
  ],
  authors: [{ name: "Aurelia Table" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Aurelia Table",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Aurelia Table",
  image:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2200&q=85",
  servesCuisine: ["Modern Indian", "Fine Dining", "Desserts", "Premium Beverages"],
  priceRange: "$$$",
  telephone: "+91-90000-00000",
  email: "reservations@aureliatable.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bandra West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "01:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1840",
  },
  acceptsReservations: true,
  hasMenu: "https://aurelia-table.example/#menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
