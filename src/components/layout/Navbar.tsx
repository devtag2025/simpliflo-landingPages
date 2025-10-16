"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
// Navigation items array
const navItems = [
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Help Center", href: "/help-center" },
  { label: "Trust", href: "/trust" },
];

function Dropdown({
  items,
  open,
  anchorRef,
  closeDropdown,
}: {
  items: { label: string; href: string }[];
  open: boolean;
  anchorRef: React.RefObject<HTMLDivElement>;
  closeDropdown: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, anchorRef, closeDropdown]);

  if (!open) return null;
  return (
    <div className="absolute left-0 top-full mt-2 w-44 sm:w-48 bg-[var(--canvas-0)] backdrop-blur-md rounded-2xl shadow-xl border border-[var(--champagne)] z-20">
      <ul className="py-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block px-4 sm:px-5 py-2 text-[var(--ink-800)] hover:bg-[var(--canvas-50)] hover:text-[var(--teal-hero)] rounded-xl transition"
              tabIndex={0}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ModernNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    function handleFocus(e: FocusEvent) {
      if (
        dropdownOpen &&
        dropdownRefs.current[dropdownOpen] &&
        !dropdownRefs.current[dropdownOpen]?.contains(e.target as Node)
      ) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [dropdownOpen]);

  return (
    <div className="w-full py-5 flex justify-center fixed top-0 z-50 pointer-events-none">
      <nav className="w-full max-w-[1600px] flex flex-wrap justify-between items-center px-2 md:px-6 xl:px-8 min-h-[48px] pointer-events-auto gap-4">
        {/* Logo and hamburger for mobile */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white transition shadow-lg"
          >
            <img src="/logo.png" alt="Simpliflow Logo" className="w-12 h-12 object-contain" />
            <span className="font-semibold tracking-widest text-[var(--ink-900)] text-base drop-shadow-sm">
              SIMPLIFLOW
            </span>
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-full font-medium text-base bg-white/90 backdrop-blur-md text-[var(--teal-hero)] hover:bg-white transition shadow-lg"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ minWidth: 0, padding: "0.5rem", width: "2.5rem", height: "2.5rem" }}
          >
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
  <div className="hidden lg:flex flex-wrap items-center bg-white/90 backdrop-blur-md rounded-full px-2 md:px-3 xl:px-4 gap-2 md:gap-4 xl:gap-5 min-h-[40px] shadow-2xl">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 xl:gap-5 text-base font-semibold text-[var(--ink-900)] relative">
            <Link href="/" className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-[var(--canvas-50)] transition">
              <img src="/logo.png" alt="Simpliflow Logo" className="w-12 h-12 object-contain" />
              <span className="font-semibold tracking-widest text-[var(--ink-900)] text-base">SIMPLIFLOW</span>
            </Link>
            {navItems.map((item) => (
              <div key={item.label} className="relative flex items-center">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-[var(--canvas-50)] transition text-[var(--ink-900)]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex flex-wrap items-center bg-white/90 backdrop-blur-md rounded-full px-2 md:px-3 xl:px-4 py-2 gap-2 md:gap-4 min-h-[40px] shadow-2xl">
          <Link href="/login" className="inline-flex items-center justify-center rounded-full font-semibold text-base px-4 py-2 min-w-[100px] h-10 bg-transparent text-[#0E7C86] hover:bg-[var(--canvas-50)] transition">
            Login
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-full font-semibold text-base px-4 py-2 min-w-[100px] h-10 bg-[#0E7C86] text-white hover:opacity-90 transition"
          >
            Book a Demo
            <span className="ml-2 w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
              <svg width="16" height="16" fill="none">
                <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 flex flex-col lg:hidden pointer-events-auto" onClick={() => setMobileOpen(false)}>
          <div
            className="bg-white rounded-t-2xl shadow-xl mx-2 mt-4 p-0 flex flex-col gap-0 max-h-[85vh] overflow-y-auto"
            style={{ animation: "slidein .2s" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full font-medium text-base bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                aria-label="Close menu"
                style={{ minWidth: 0, height: "2.5rem", width: "2.5rem", padding: "0.5rem" }}
              >
                <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="px-6 pb-2">
              <Link
                href="/"
                className="flex items-center gap-2 px-2 py-2 rounded-xl bg-[var(--canvas-50)]"
              >
                <img src="/logo.png" alt="Simpliflow Logo" className="w-6 h-6 object-contain" />
                <span className="font-semibold tracking-widest text-[var(--ink-900)] text-base drop-shadow">
                  SIMPLIFLOW
                </span>
              </Link>
            </div>
            <nav className="flex flex-col gap-2 px-6 pb-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="items-center justify-center rounded-full font-medium text-base px-4 py-2 min-w-[100px] h-10 bg-[var(--canvas-50)] text-[var(--ink-900)] hover:bg-[var(--canvas-0)] transition block text-left"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/login" className="inline-flex items-center justify-center rounded-full font-medium text-base px-4 py-2 min-w-[100px] h-10 bg-[var(--canvas-50)] text-[var(--teal-hero)] hover:bg-[var(--canvas-0)] transition">
                Login
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-full font-medium text-base px-4 py-2 min-w-[100px] h-10 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] text-white hover:opacity-90 transition"
              >
                Book a Demo
                <span className="ml-2 w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
                  <svg width="16" height="16" fill="none">
                    <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </nav>
          </div>
          <style jsx>{`
            @keyframes slidein {
              from { transform: translateY(50px); opacity:0 }
              to { transform: translateY(0); opacity:1 }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}