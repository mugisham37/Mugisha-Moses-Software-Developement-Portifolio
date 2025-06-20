import type { Metadata } from "next";
import { Outfit, Space_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "../components/ui/FloatingNav";
import { FaHome, FaUser, FaCode, FaLightbulb, FaBriefcase, FaEnvelope } from "react-icons/fa";

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

// Navigation items for the floating nav
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome className="w-4 h-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaUser className="w-4 h-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <FaCode className="w-4 h-4" />,
  },
  {
    name: "Approach",
    link: "#approach",
    icon: <FaLightbulb className="w-4 h-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaBriefcase className="w-4 h-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FaEnvelope className="w-4 h-4" />,
  },
];

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
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
