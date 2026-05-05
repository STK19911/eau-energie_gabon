"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MissionSection() {
  const [hovered, setHovered] = useState<'eau' | 'energie' | null>(null);

  const getClipPath = (side: 'eau' | 'energie') => {
    if (side === 'eau') {
      if (hovered === 'eau') return 'polygon(0 0, 65% 0, 55% 100%, 0 100%)'; 
      if (hovered === 'energie') return 'polygon(0 0, 45% 0, 35% 100%, 0 100%)'; 
      return 'polygon(0 0, 55% 0, 45% 100%, 0 100%)'; 
    } else {
      if (hovered === 'eau') return 'polygon(65% 0, 100% 0, 100% 100%, 55% 100%)'; 
      if (hovered === 'energie') return 'polygon(45% 0, 100% 0, 100% 100%, 35% 100%)'; 
      return 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)'; 
    }
  };

  return (
    <section className="bg-slate-50 pt-24 md:pt-32">
      
      {/* ── En-tête (Toujours présent) ── */}
      <div className="flex flex-col items-center text-center mb-16 px-6 max-w-7xl mx-auto">
        <div className="inline-block border border-slate-200 bg-white rounded-full px-5 py-1.5 mb-6 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Domaines d'Action
          </span>
        </div>
        <h2 className="text-4xl md:text-[3.25rem] font-medium tracking-tight text-slate-900 leading-[1.1] max-w-2xl">
          Deux ressources vitales. <br className="hidden md:block"/>
          <span className="text-slate-500">Un seul avenir pour le Gabon.</span>
        </h2>
      </div>

      {/* ── Split Screen Diagonale (Plein écran sur Desktop) ── */}
      <div className="hidden md:block relative w-full h-[75vh] min-h-[600px] overflow-hidden bg-black">
        
        {/* === SECTION GAUCHE : EAU === */}
        <Link
          href="/secteur-eau"
          onMouseEnter={() => setHovered('eau')}
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group"
          style={{ clipPath: getClipPath('eau') }}
        >
          {/* Image */}
          <div className={`relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${hovered === 'eau' ? 'scale-105' : 'scale-100'}`}>
            <Image src="/forage.jpg" alt="L'Or Bleu du Gabon" fill className="object-cover" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/20 to-transparent" />
          <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${hovered === 'energie' ? 'opacity-60' : 'opacity-0'}`} />

          {/* Conteneur centré sur la grille du site pour bloquer le texte */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-end pb-20 pointer-events-none">
            {/* Le bloc de texte a une largeur max et pointeurs réactivés */}
            <div className="max-w-[320px] xl:max-w-md pointer-events-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg inline-block mb-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                  Secteur Eau
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                L'Or Bleu du Gabon
              </h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-8">
                Garantir l'accès universel à une eau salubre dans chaque province, des bassins de l'Ogooué aux côtes atlantiques.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-[#378ADD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="text-white text-[11px] font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explorer
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* === SECTION DROITE : ÉNERGIE === */}
        <Link
          href="/secteur-energie"
          onMouseEnter={() => setHovered('energie')}
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group"
          style={{ clipPath: getClipPath('energie') }}
        >
          {/* Image */}
          <div className={`relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${hovered === 'energie' ? 'scale-105' : 'scale-100'}`}>
            <Image src="/markus-spiske-rNn_TU8dvoY-unsplash.jpg" alt="L'Énergie de Demain" fill className="object-cover" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/20 to-transparent" />
          <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${hovered === 'eau' ? 'opacity-60' : 'opacity-0'}`} />

          {/* Conteneur centré sur la grille du site pour bloquer le texte */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-end items-end pb-20 pointer-events-none">
            {/* Le bloc de texte a une largeur max, aligné à droite */}
            <div className="max-w-[320px] xl:max-w-md text-right flex flex-col items-end pointer-events-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg inline-block mb-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                  Secteur Énergie
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                L'Énergie de Demain
              </h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-8">
                Développer un mix énergétique souverain et durable pour alimenter la croissance de nos industries et de nos foyers.
              </p>
              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-[#009E60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="text-white text-[11px] font-bold uppercase tracking-widest opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explorer
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Version Mobile (Empilée verticalement Plein écran) ── */}
      <div className="md:hidden flex flex-col w-full h-[90vh]">
        <Link href="/secteur-eau" className="relative w-full h-1/2 overflow-hidden block group border-b border-white/10">
          <Image src="/forage.jpg" alt="L'Or Bleu" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <span className="self-start bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Secteur Eau
            </span>
            <h3 className="text-3xl font-medium text-white tracking-tight mb-2">L'Or Bleu</h3>
            <p className="text-white/80 text-[13px] line-clamp-2">Garantir l'accès universel à une eau salubre dans chaque province.</p>
          </div>
        </Link>
        <Link href="/secteur-energie" className="relative w-full h-1/2 overflow-hidden block group">
          <Image src="/markus-spiske-rNn_TU8dvoY-unsplash.jpg" alt="L'Énergie" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <span className="self-start bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Secteur Énergie
            </span>
            <h3 className="text-3xl font-medium text-white tracking-tight mb-2">L'Énergie</h3>
            <p className="text-white/80 text-[13px] line-clamp-2">Développer un mix énergétique souverain pour alimenter la croissance.</p>
          </div>
        </Link>
      </div>

    </section>
  );
}