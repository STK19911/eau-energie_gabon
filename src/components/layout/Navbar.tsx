"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Des liens purs, sans aucune icône, pour un minimalisme absolu
const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Le Ministère",
    href: "#",
    children: [
      { label: "Mot du Ministre", href: "/#ministre" },
      { label: "Missions & Organigramme", href: "/" },
      { label: "Textes de loi & Décrets", href: "/" },
    ],
  },
  {
    label: "Eau",
    href: "#",
    children: [
      { label: "Eau potable", href: "/" },
      { label: "Ressources hydrauliques", href: "/" },
      { label: "Projets & Barrages", href: "/" },
    ],
  },
  {
    label: "Énergie",
    href: "#",
    children: [
      { label: "Mix énergétique", href: "/" },
      { label: "Électrification rurale", href: "/" },
      { label: "Réseau national", href: "/" },
    ],
  },
  { label: "Presse", href: "/" },
  { label: "Documentation", href: "/" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Gestion du clic en dehors pour fermer les menus
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop Navbar (Apple Glassmorphism) ── */}
      <div className="fixed top-4 w-full z-50 flex justify-center px-4 hidden md:flex pointer-events-none">
        <nav
          ref={dropdownRef}
          // Apple Style : backdrop-blur-2xl, rounded-2xl (squircle), bordure ultra fine
          className="pointer-events-auto bg-white/70 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-white/40 rounded-2xl px-3 py-2.5 flex items-center gap-8 transition-all duration-500"
        >
          {/* Logo Écusson Gabon (Minimaliste) */}
          <Link href="/" className="flex items-center justify-center pl-2 pr-1 transition-transform hover:scale-105 duration-300">
            <div className="relative h-6 w-6">
              <Image 
                src="/ecussongabon.svg" 
                alt="Écusson de la République Gabonaise" 
                fill 
                className="object-contain drop-shadow-sm" 
                priority 
              />
            </div>
          </Link>

          {/* Links (Font System Apple) */}
          <div className="flex items-center gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    // Police type San Francisco : font-medium, text-[13px], tracking-tight
                    className="group relative flex items-center gap-1 text-slate-600 hover:text-black px-3 py-1.5 transition-colors text-[13px] font-medium tracking-tight"
                  >
                    {link.label}
                    <svg
                      width="8" height="5" viewBox="0 0 10 6" fill="none"
                      className={`ml-1 opacity-40 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${openDropdown === link.label ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    {/* Hover Drapeau Gabonais Fin et Élégant */}
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#009E60] via-[#FCD116] to-[#3A75C4] transition-all duration-300 ease-out group-hover:w-[80%] rounded-full opacity-0 group-hover:opacity-100" />
                  </button>

                  {/* Dropdown panel (Verre dépoli) */}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white/80 backdrop-blur-3xl border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group relative block px-5 py-2.5 text-[12px] font-medium tracking-tight text-slate-600 hover:text-black hover:bg-black/5 transition-colors"
                        >
                          <span className="relative z-10">{child.label}</span>
                          <span className="absolute left-5 bottom-2 w-0 h-[1.5px] bg-gradient-to-r from-[#009E60] via-[#FCD116] to-[#3A75C4] transition-all duration-300 ease-out group-hover:w-[15px] rounded-full" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative flex items-center text-slate-600 hover:text-black px-3 py-1.5 transition-colors text-[13px] font-medium tracking-tight"
                >
                  {link.label}
                  {/* Hover Drapeau Gabonais Fin et Élégant */}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#009E60] via-[#FCD116] to-[#3A75C4] transition-all duration-300 ease-out group-hover:w-[80%] rounded-full opacity-0 group-hover:opacity-100" />
                </Link>
              )
            )}
          </div>

          {/* Langue (Typographie propre) */}
          <div className="flex items-center pl-3 pr-2 border-l border-slate-300/50">
            <button className="text-[11px] font-semibold text-slate-500 hover:text-black uppercase tracking-widest transition-colors">
              FR
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Navbar (Apple Glass) ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:hidden px-5 py-4 bg-white/70 backdrop-blur-2xl border-b border-black/5">
        <Link href="/" className="flex items-center gap-3">
            <div className="relative h-6 w-6">
              <Image src="/ecussongabon.svg" alt="Écusson" fill className="object-contain" />
            </div>
            <span className="text-black font-medium text-[15px] tracking-tight">
              Énergie Gabon
            </span>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-black"
        >
          <span className={`block w-[18px] h-[1.5px] bg-current transition-transform duration-300 ease-in-out ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-current transition-opacity duration-300 ease-in-out ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-current transition-transform duration-300 ease-in-out ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-3xl transition-opacity duration-500 flex flex-col ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-24" />
        <nav className="flex-1 overflow-y-auto px-8">
          <ul className="space-y-6">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group relative flex items-center py-2 text-black font-medium text-3xl tracking-tight"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#009E60] via-[#FCD116] to-[#3A75C4] transition-all duration-300 ease-out group-hover:w-1/3 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}