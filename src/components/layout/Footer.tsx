"use client";
import Link from 'next/link';

const nav = {
  "Le Ministère": [
    { label: "Mot du Ministre",       href: "/biographie" },
    { label: "Missions & Organigramme", href: "/ministere/missions" },
    { label: "Textes de loi & Décrets", href: "/ministere/textes" },
  ],
  "Secteur Eau": [
    { label: "Eau potable",           href: "/secteur-eau" },
    { label: "Ressources hydrauliques", href: "/secteur-eau/ressources" },
    { label: "Projets & Barrages",    href: "/secteur-eau/projets" },
  ],
  "Secteur Énergie": [
    { label: "Mix énergétique",       href: "/secteur-energie" },
    { label: "Électrification rurale", href: "/secteur-energie/rural" },
    { label: "Réseau national",       href: "/secteur-energie/reseau" },
  ],
  "Documentation": [
    { label: "Rapports annuels",      href: "/documentation/rapports" },
    { label: "Formulaires",           href: "/documentation/formulaires" },
    { label: "Appels d'offres",       href: "/documentation/appels-offres" },
    { label: "Espace Presse",         href: "/presse" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <p className="text-white font-black text-lg tracking-tighter leading-tight">
                GABON<br />
                <span className="text-volt">NRG</span>
              </p>
              <p className="text-white/25 text-[9px] uppercase tracking-[0.2em] mt-2 leading-relaxed">
                Ministère de l'Eau<br />et de l'Énergie
              </p>
            </div>
            <div className="w-8 h-px bg-volt/50 mb-5" />
            <p className="text-white/25 text-[11px] leading-relaxed">
              République Gabonaise<br />Libreville, Gabon
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([section, items]) => (
            <div key={section}>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.35em] mb-5">
                {section}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-[11px] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-16 pt-10 border-t border-white/8 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white/25 text-[9px] uppercase tracking-widest mb-1.5">Adresse</p>
            <p className="text-white/50 text-[11px] leading-relaxed">
              Ministère de l'Eau et de l'Énergie<br />BP 2146, Libreville, Gabon
            </p>
          </div>
          <div>
            <p className="text-white/25 text-[9px] uppercase tracking-widest mb-1.5">Contact</p>
            <p className="text-white/50 text-[11px] leading-relaxed">
              contact@energie.gouv.ga<br />+241 11 76 20 00
            </p>
          </div>
          <div>
            <p className="text-white/25 text-[9px] uppercase tracking-widest mb-1.5">
              Urgences Eau / Énergie
            </p>
            <p className="text-volt font-black text-xl tracking-tight">1380</p>
            <p className="text-white/25 text-[9px] mt-0.5">Numéro gratuit — 24h/24</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] px-8 md:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-[10px]">
            © {new Date().getFullYear()} Ministère de l'Eau et de l'Énergie — République Gabonaise
          </p>
          <div className="flex items-center gap-6">
            {['Mentions légales', 'Confidentialité', 'Accessibilité'].map((item) => (
              <Link key={item} href="#" className="text-white/15 text-[10px] hover:text-white/40 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}