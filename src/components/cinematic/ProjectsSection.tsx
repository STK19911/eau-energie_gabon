"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  {
    id: '01',
    category: 'Hydraulique',
    title: 'Barrage de Ngoulmendjim',
    image: '/jealife-pictures-5c4bq606DME-unsplash.jpg',
    href: '/secteur-energie',
  },
  {
    id: '02',
    category: 'Eau Potable',
    title: 'Forages Ruraux',
    image: '/martin-adams-a_PDPUPuNZ8-unsplash.jpg',
    href: '/secteur-eau',
  },
  {
    id: '03',
    category: 'Solaire',
    title: 'Centrale de Franceville',
    image: '/markus-spiske-rNn_TU8dvoY-unsplash.jpg',
    href: '/secteur-energie',
  },
  {
    id: '04',
    category: 'Infrastructure',
    title: 'Réseau Interconnecté',
    image: '/dan-meyers-w6X7XaolqA0-unsplash.jpg',
    href: '/secteur-energie',
  }
];

export default function ProjectsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  // États pour l'animation au défilement
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Déclenche l'animation une seule fois
        }
      },
      { threshold: 0.15 } // Se déclenche quand 15% de la section est visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ── En-tête (Animé) ── */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-md">
            {/* Pilule "EXPERTISE" style */}
            <div className="inline-block border border-slate-300 rounded-full px-5 py-1.5 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">
                Projets Phares
              </span>
            </div>
            
            {/* Titre principal */}
            <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-slate-900 leading-[1.1]">
              Explorez nos chantiers d'infrastructures
            </h2>
          </div>

          {/* Boutons flèches bleus ronds */}
          <div className="flex items-center gap-3 hidden md:flex">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0057FF] text-white hover:bg-slate-900 transition-colors shadow-lg shadow-blue-500/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0057FF] text-white hover:bg-slate-900 transition-colors shadow-lg shadow-blue-500/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* ── Carrousel Swiper (Avec effet Cascade) ── */}
        <div className="-mx-6 px-6 md:mx-0 md:px-0">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={20}
            className="w-full pb-10"
          >
            {/* Carte Bleue Unie (Intro) - Apparaît en premier */}
            <SwiperSlide 
              className={`!w-[280px] md:!w-[300px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="h-[400px] bg-[#0057FF] rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-medium tracking-tight mb-1">Vision 2030</h3>
                  <p className="text-white/70 text-[13px] font-medium tracking-wide">Plan Stratégique</p>
                  
                  <p className="mt-8 text-sm leading-relaxed text-white/90 font-light">
                    Le Ministère pilote des projets d'envergure nationale pour garantir l'accès universel à l'eau potable et à l'électricité, véritables fondations de notre développement.
                  </p>
                </div>

                {/* Icônes/Liens */}
                <div className="flex gap-3 items-center relative z-10">
                   <Link href="/secteur-eau" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[#0057FF] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </Link>
                </div>
                
                {/* Effet lumineux subtil */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
            </SwiperSlide>

            {/* Cartes Images (Projets) - Apparaissent en cascade grâce au (index + 1) * 150ms */}
            {projects.map((p, index) => (
              <SwiperSlide 
                key={p.id} 
                className={`!w-[280px] md:!w-[300px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <Link href={p.href} className="block group">
                  <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Dégradé noir */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                    
                    {/* Contenu textuel */}
                    <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
                      <h3 className="text-white font-medium text-[17px] tracking-tight mb-1 drop-shadow-md">
                        {p.title}
                      </h3>
                      <p className="text-white/60 text-[11px] font-semibold tracking-wide uppercase">
                        {p.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}