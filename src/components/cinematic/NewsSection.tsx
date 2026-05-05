"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    date: '28 Avr. 2026',
    category: 'Communiqué',
    title: 'Signature du contrat pour la centrale solaire de Franceville',
    excerpt: 'Le Ministre a présidé la cérémonie avec le consortium ENGIE–TotalEnergies pour une centrale de 50 MWc.',
    image: '/chris-liverani-XLFu0PM5Qsg-unsplash.jpg',
  },
  {
    date: '21 Avr. 2026',
    category: 'Secteur Eau',
    title: 'Inauguration du réseau d\'eau potable de Makokou',
    excerpt: 'Plus de 45 000 habitants bénéficient désormais d\'un accès direct et continu à l\'eau traitée.',
    image: '/dan-meyers-w6X7XaolqA0-unsplash.jpg',
  },
  {
    date: '14 Avr. 2026',
    category: "Appel d'offres",
    title: "Avis d'appel d'offres — Forages Phase III",
    excerpt: 'Consultation pour le déploiement de 60 forages équipés de pompes solaires dans les provinces du Sud.',
    image: '/maria-lupan-hy97yy3e03A-unsplash.jpg',
  },
  {
    date: '02 Avr. 2026',
    category: 'Énergie',
    title: 'Lancement du programme d\'éclairage public',
    excerpt: 'Déploiement de 10 000 lampadaires solaires dans les communes urbaines pour renforcer la sécurité.',
    image: '/markus-spiske-rNn_TU8dvoY-unsplash.jpg',
  },
];

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-50 py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── En-tête de Section (Animé) ── */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-xl">
            <div className="inline-block border border-slate-300 rounded-full px-4 py-1 mb-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-800">
                Espace Presse
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
              Actualités & Communiqués
            </h2>
          </div>
          
          <Link
            href="/presse"
            className="group flex items-center gap-2 text-[12px] font-semibold tracking-wide text-[#0057FF] hover:text-slate-900 transition-colors pb-1"
          >
            Toutes les publications 
            <span className="w-6 h-6 rounded-full bg-[#0057FF]/10 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </div>

        {/* ── Grille 2 Colonnes Animée (Cascade) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {news.map((item, index) => (
            <Link
              key={index}
              href="/presse"
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative w-full bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-row hover:-translate-y-0.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              
              {/* Contenu Textuel (Gauche) */}
              <div className="relative z-10 flex flex-col p-5 md:p-6 w-[65%]">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-slate-50 border border-slate-100 text-slate-800 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                  <span className="text-slate-400 text-[9px] font-semibold tracking-widest uppercase">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-[17px] md:text-lg font-medium tracking-tight text-slate-900 leading-snug mb-2 group-hover:text-[#0057FF] transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-[13px] leading-relaxed mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                {/* Bouton d'action subtil */}
                <div className="mt-auto flex items-center gap-2 text-[11px] font-semibold tracking-wide text-[#0057FF]">
                  Lire l'article 
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </div>

              {/* Image Fondue (Droite) */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-[45%] h-full pointer-events-none"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%)', 
                  maskImage: 'linear-gradient(to right, transparent 0%, black 60%)' 
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
              </div>
              
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}