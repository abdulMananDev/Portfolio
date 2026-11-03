import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const TITLE = "Abdul Manan Malik | Senior Front-End Developer";
const DESCRIPTION =
  "Senior Front-End Developer specialising in React.js, Next.js, TypeScript and data visualisation. 5+ years shipping fast, collaborative, production-grade web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">{children}</body>
      {/* <script
        src="https://mcp-server-ai-powered-chat-bot.vercel.app/embed/pk_live_bc39ea942635fb2ba09d1e836a667210/loader.js"
        async
      ></script> */}
    </html>
  );
}
