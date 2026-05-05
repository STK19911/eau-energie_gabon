"use client";
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 67,  suffix: '%',   label: "Accès eau potable",   sublabel: "Objectif 95% en 2030" },
  { value: 730, suffix: ' MW', label: "Capacité installée",  sublabel: "Hydroélectricité nationale" },
  { value: 42,  suffix: '',    label: "Projets actifs",      sublabel: "Barrages, forages & solaire" },
  { value: 1.8, suffix: 'M',   label: "Ménages électrifiés", sublabel: "Sur 2,3 millions d'habitants" },
];

function AnimatedNumber({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const isFloat = target % 1 !== 0;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const v = target * (1 - Math.pow(1 - p, 3));
          setDisplay(isFloat ? Math.round(v * 10) / 10 : Math.floor(v));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{target % 1 !== 0 ? display.toFixed(1) : display}{suffix}</span>;
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation d'apparition au scroll pour toute la barre
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
    <section 
      ref={sectionRef} 
      // Fond blanc pur, ombre très douce en dessous pour détacher la section
      className="bg-white relative z-20 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 py-12 md:py-16 gap-y-12 md:gap-y-0">
          
          {stats.map((stat, i) => (
            <div
              key={i}
              // Effet d'apparition en cascade (Stagger)
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`flex flex-col items-center text-center px-4 md:px-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                // Séparateurs verticaux subtils
                i !== 3 ? 'md:border-r md:border-slate-200/60' : ''
              } ${
                i % 2 === 0 ? 'border-r border-slate-200/60 md:border-r-slate-200/60' : ''
              }`}
            >
              {/* Chiffres animés : police affinée, taille augmentée, bleu Premium */}
              <div className="text-[#0057FF] font-light text-5xl md:text-[3.5rem] tracking-tight leading-none mb-4 drop-shadow-sm">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Titre de la stat : petit, gras et très espacé */}
              <p className="text-slate-900 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-2">
                {stat.label}
              </p>
              
              {/* Sous-texte explicatif : adouci et plus discret */}
              <p className="text-slate-500 text-[12px] md:text-[13px] font-medium leading-snug max-w-[180px]">
                {stat.sublabel}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}