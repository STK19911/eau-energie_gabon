"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function MinisterWord() {
  return (
    <section className="bg-white overflow-hidden border-t border-slate-200/60">
      <div className="grid md:grid-cols-2" style={{ minHeight: 600 }}>

        {/* ── Photo du Ministre (Côté Gauche) ── */}
        <div className="relative bg-slate-900 overflow-hidden group" style={{ minHeight: 420 }}>
          <Image
            src="/1755521556557.jpg"
            alt="Le Ministre"
            fill
            className="object-cover object-top brightness-90 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          
          {/* Dégradé sombre pour faire ressortir le texte blanc */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/30 to-transparent" />

          {/* Cartouche d'identification (Style Premium Glassmorphism) */}
          <div className="absolute bottom-10 left-10 right-10 z-10">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-black/20">
              <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                Le Ministre
              </span>
            </div>
            
            <div className="text-white font-medium text-3xl md:text-4xl tracking-tight leading-tight mb-2 drop-shadow-md">
              Tonangoye<br />Akure Davain
            </div>
            
            {/* Titre officiel corrigé */}
            <div className="text-white/70 text-[11px] font-semibold uppercase tracking-widest mt-2 leading-relaxed">
              Ministre de l'Accès universel à l'eau et à l'énergie
            </div>
          </div>

          {/* Ligne séparatrice subtile au milieu (visible sur desktop) */}
          <div className="absolute top-0 right-0 w-px h-full bg-slate-200/20 z-20 hidden md:block" />
        </div>

        {/* ── Citation & Contenu (Côté Droit) ── */}
        <div className="bg-slate-50 flex flex-col justify-center px-10 md:px-16 py-16 md:py-24 relative">
          
          {/* Guillemet décoratif discret en arrière-plan */}
          <div
            className="absolute top-10 left-10 font-black leading-none select-none pointer-events-none"
            style={{ fontSize: 160, color: '#0057FF', opacity: 0.04 }}
          >
            "
          </div>

          <div className="relative z-10">
            <blockquote className="text-slate-900 font-medium text-2xl md:text-[2rem] tracking-tight leading-[1.25] mb-10">
              L'eau et l'énergie ne sont pas des privilèges.{' '}
              <span className="text-[#0057FF]">Ce sont les fondations</span>{' '}
              sur lesquelles le Gabon bâtit sa souveraineté et son avenir industriel.
            </blockquote>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-slate-300" />
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                Vision 2030 — Discours inaugural
              </span>
            </div>

            {/* Objectifs / Points clés */}
            <ul className="space-y-4 mb-12">
              {[
                "Atteindre 95% d'accès à l'eau potable d'ici 2030",
                'Tripler la capacité de production électrique nationale',
                'Électrifier 100% des chefs-lieux de district',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0057FF] mt-[7px] flex-shrink-0" />
                  <span className="text-slate-600 text-[15px] leading-relaxed font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/biographie"
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#0057FF] hover:text-slate-900 transition-colors"
            >
              Biographie complète 
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-lg leading-none">
                →
              </span>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}