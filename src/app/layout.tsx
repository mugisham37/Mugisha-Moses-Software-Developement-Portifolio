import type { Metadata } from "next";
import { Outfit, Space_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Outfit - Modern sans-serif (primary font)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// Space Mono - Monospace technical font
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Instrument Serif - Distinctive serif font
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mugisha Moses - Software Developer",
  description: "Portfolio website showcasing my work as a software developer",
  keywords: ["software developer", "web development", "portfolio", "Next.js", "React"],
  authors: [{ name: "Mugisha Moses" }],
  openGraph: {
    title: "Mugisha Moses - Software Developer",
    description: "Portfolio website showcasing my work as a software developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body
        className={`${outfit.variable} ${spaceMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
