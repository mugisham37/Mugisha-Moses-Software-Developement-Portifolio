"use client";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10">
        <Hero />
      </section>
    </main>
  );
}
