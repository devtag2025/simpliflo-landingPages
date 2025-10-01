"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Product",
    dropdown: [
      { label: "Overview", href: "/overview" },
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      { label: "For Teams", href: "/teams" },
      { label: "For Individuals", href: "/individuals" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Community", href: "/community" },
    ],
  },
  // Update the About Us link to use the anchor!
  { label: "About Us", dropdown: null, href: "#about" },
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
    <div className="absolute left-0 top-full mt-2 w-44 sm:w-48 bg-white rounded-2xl shadow-xl border border-gray-100 z-20">
      <ul className="py-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block px-4 sm:px-5 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition"
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

  // Prevent body scroll when mobile menu is open
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

  // Close dropdown on Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // For accessibility: close dropdown on tab away
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

  const buttonClass =
    "inline-flex items-center justify-center rounded-full font-medium text-base px-4 py-2 min-w-[100px] h-10 bg-white text-gray-700 hover:bg-purple-100 transition";

  return (
    <div className="w-full py-5 flex justify-center sticky top-0 z-50 bg-transparent">
      <nav className="w-full max-w-[1600px] flex flex-wrap justify-between items-center px-2 md:px-6 xl:px-8 min-h-[48px]">
        {/* Logo and hamburger for mobile */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-purple-50 transition"
            style={{
              background:
                "linear-gradient(90deg, #ede9fe 80%, #fff 100%)",
            }}
          >
            <span className="w-7 h-7 bg-gradient-to-tr from-purple-400 to-indigo-300 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="url(#grad1)" />
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="font-semibold tracking-widest text-gray-900 text-base drop-shadow">
              SIMPLIFLOW
            </span>
          </Link>
          {/* Hamburger right */}
          <button
            className={buttonClass}
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ minWidth: 0, padding: "0.5rem" }}
          >
            <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
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
        <div className="hidden lg:flex flex-wrap items-center bg-white rounded-full px-2 md:px-3 xl:px-4 py-2 gap-2 md:gap-4 xl:gap-5 min-h-[40px] shadow-2xl">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 xl:gap-5 text-base font-medium text-gray-700 relative">
            {/* Logo as nav item */}
            <Link href="/" className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-purple-50 transition">
              <span className="w-6 h-6 bg-gradient-to-tr from-purple-400 to-indigo-300 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="url(#grad1)" />
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa"/>
                      <stop offset="1" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="font-semibold tracking-widest text-gray-700 text-base">SIMPLIFLOW</span>
            </Link>
            {navItems.map((item) => {
              const ref = useRef<HTMLDivElement>(null!);
              dropdownRefs.current[item.label] = ref.current;
              return (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  ref={ref}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1 hover:text-purple-500 pr-2 ${buttonClass} cursor-pointer`}
                        aria-haspopup={true}
                        aria-expanded={dropdownOpen === item.label}
                        onClick={() =>
                          setDropdownOpen(
                            dropdownOpen === item.label ? null : item.label
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <span className="text-xs">▼</span>
                      </button>
                      <Dropdown
                        items={item.dropdown}
                        open={dropdownOpen === item.label}
                        anchorRef={ref}
                        closeDropdown={() => setDropdownOpen(null)}
                      />
                    </>
                  ) : (
                    // Use <a> for in-page anchor navigation
                    <a
                      href={item.href}
                      className={buttonClass + " flex items-center gap-1 hover:text-purple-500 pr-2"}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex flex-wrap items-center bg-white rounded-full px-2 md:px-3 xl:px-4 py-2 gap-2 md:gap-4 min-h-[40px] shadow-2xl">
          <Link href="/login" className={buttonClass}>
            Login
          </Link>
          <Link
            href="/demo"
            className={`${buttonClass} bg-gradient-to-r from-purple-400 to-pink-400 text-white`}
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
        <div className="fixed inset-0 z-40 bg-black/40 flex flex-col lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="bg-white rounded-t-2xl shadow-xl mx-2 mt-4 p-0 flex flex-col gap-0 max-h-[85vh] overflow-y-auto"
            style={{ animation: "slidein .3s" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className={buttonClass}
                aria-label="Close menu"
                style={{ minWidth: 0, height: "2.5rem", width: "2.5rem", padding: "0.5rem" }}
              >
                <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            {/* Logo as nav item in mobile */}
            <div className="px-6 pb-2">
              <Link
                href="/"
                className="flex items-center gap-2 px-2 py-2 rounded-xl"
                style={{
                  background:
                    "linear-gradient(90deg, #ede9fe 90%, #fff 100%)",
                }}
              >
                <span className="w-6 h-6 bg-gradient-to-tr from-purple-400 to-indigo-300 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="url(#grad1)" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a78bfa"/>
                        <stop offset="1" stopColor="#818cf8"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-semibold tracking-widest text-gray-900 text-base drop-shadow">
                  SIMPLIFLOW
                </span>
              </Link>
            </div>
            <nav className="flex flex-col gap-2 px-6 pb-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {/* Use <a> here for anchor, or Link for routes */}
                  <a
                    href={item.href}
                    className={buttonClass + " block text-left"}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 flex flex-col">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="py-1 text-sm text-gray-600 hover:text-purple-500 transition"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/login" className={buttonClass}>
                Login
              </Link>
              <Link
                href="/demo"
                className={`${buttonClass} bg-gradient-to-r from-purple-400 to-pink-400 text-white`}
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