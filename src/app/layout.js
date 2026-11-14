import "./globals.css";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Folio Craft — Build a portfolio that feels like you",
    template: "%s | Folio Craft"
  },
  description: "Create, customize, and publish a professional portfolio with Folio Craft.",
  applicationName: "Folio Craft",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Folio Craft",
    title: "Folio Craft — Build a portfolio that feels like you",
    description: "Create and publish your professional portfolio."
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
