"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const platforms = [
  {
    title: "Windows 11 / 10",
    version: "AlgorandOS Desktop v2.6",
    size: "4.2 GB",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "#download-windows",
    badge: "Stable",
  },
  {
    title: "macOS (Apple Silicon + Intel)",
    version: "AlgorandOS Desktop v2.6",
    size: "4.0 GB",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    link: "#download-macos",
    badge: "Recommended",
  },
  {
    title: "Linux (Deb / RPM)",
    version: "AlgorandOS Core v2.6",
    size: "3.8 GB",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80",
    link: "#download-linux",
    badge: "Developer",
  },
  {
    title: "Android",
    version: "AlgorandOS Mobile v1.8",
    size: "1.4 GB",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    link: "#download-android",
    badge: "Beta",
  },
];

const highlights = [
  "SHA-256 integrity checks",
  "One-click wallet migration",
  "Fast chain sync with light-node fallback",
  "Secure boot image signatures",
];

export default function DownloadShowcase() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
      });

      gsap.from(".stat-chip", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        delay: 0.4,
      });

      gsap.from(".download-card", {
        y: 45,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.5,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page" ref={rootRef}>
      <header className="hero">
        <p className="brand">ALGorandOS Download Center</p>
        <h1 className="hero-title">Secure Operating System Builds for the Algorand Ecosystem</h1>
        <p className="hero-subtitle">
          Download verified AlgorandOS installers with built-in wallet setup, node tooling, and hardware
          acceleration support. Links below are mock endpoints for your future integrations.
        </p>
        <div className="stats">
          <span className="stat-chip">Latest Release: 2.6</span>
          <span className="stat-chip">Signed Build Artifacts</span>
          <span className="stat-chip">24/7 Community Mirrors</span>
        </div>
      </header>

      <main>
        <section>
          <h2>Choose Your Platform</h2>
          <div className="grid">
            {platforms.map((platform) => (
              <article className="download-card" key={platform.title}>
                <img src={platform.image} alt={`${platform.title} screenshot`} className="card-image" />
                <div className="card-content">
                  <span className="badge">{platform.badge}</span>
                  <h3>{platform.title}</h3>
                  <p>{platform.version}</p>
                  <p className="size">Package Size: {platform.size}</p>
                  <a href={platform.link} className="download-btn">
                    Download (Mock Link)
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="essentials">
          <h2>Essential Features Included</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
