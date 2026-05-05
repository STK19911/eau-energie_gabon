"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Ajout des 3 nouvelles images au tableau
const slides = [
  {
    image: "/Generated Image May 04, 2026 - 2_43PM.jpg",
    tag: "Patrimoine Naturel",
    title: "L'Or Bleu",
    desc: "Nous transformons la puissance de nos fleuves en une énergie propre et durable pour chaque foyer gabonais d'ici 2030."
  },
  {
    image: "/Generated Image May 04, 2026 - 2_34PM.jpg",
    tag: "Innovation Solaire",
    title: "Énergie Nouvelle",
    desc: "Le déploiement massif de solutions photovoltaïques au cœur de nos provinces pour une électrification rurale intelligente."
  },
  {
    image: "/jealife-pictures-5c4bq606DME-unsplash.jpg",
    tag: "Infrastructure",
    title: "Force Hydraulique",
    desc: "Modernisation des barrages nationaux : une ingénierie de précision pour soutenir la croissance industrielle du Gabon."
  },
  {
    image: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg",
    tag: "Accès Universel",
    title: "Eau Potable",
    desc: "Garantir une distribution sécurisée et continue de l'eau potable dans toutes les zones urbaines et rurales."
  },
  {
    image: "/Generated Image May 04, 2026 - 2_31PM.jpg",
    tag: "Mix Énergétique",
    title: "Réseau Intelligent",
    desc: "Une transition technologique vers des infrastructures durables, optimisant la distribution énergétique sur l'ensemble du territoire."
  },
  {
    image: "/dan-meyers-w6X7XaolqA0-unsplash.jpg",
    tag: "Souveraineté",
    title: "Ressources Vitales",
    desc: "Protéger et valoriser notre écosystème unique pour assurer l'indépendance énergétique de la nation gabonaise."
  }
];

export default function HeroSlider() {
  // État pour stocker l'instance de Swiper et pouvoir la contrôler
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="relative h-full w-full">
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Autoplay, EffectFade]}
        effect={'fade'}
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center">
              
              {/* ── Zone cliquable de l'image pour passer au slide suivant ── */}
              <div 
                className="absolute inset-0 z-0 cursor-pointer"
                onClick={() => swiperInstance?.slideNext()}
                title="Cliquez pour voir l'image suivante"
              >
                <div className="absolute inset-0 scale-105 animate-slow-pan">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover brightness-[0.7]"
                    priority
                  />
                </div>
                {/* Overlay sombre pour détacher le texte blanc */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* ── Contenu Textuel (ne bloque pas le clic sur l'image autour) ── */}
              <div className="absolute bottom-28 left-12 md:left-24 z-20 max-w-4xl pointer-events-auto">
                <span className="text-[#378ADD] font-black text-[11px] uppercase tracking-[0.5em] mb-6 block drop-shadow-md">
                  {slide.tag}
                </span>
                
                <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter mb-10 drop-shadow-2xl">
                  {slide.title.split(' ')[0]} <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                    {slide.title.split(' ')[1]}
                  </span>
                </h1>

                <p className="text-base md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed mb-12 drop-shadow-sm">
                  {slide.desc}
                </p>
                
                <div className="flex items-center gap-10">
                  {/* Correction du bouton : bg-white text-black par défaut, bleu au survol */}
                  <button 
                    className="bg-white text-slate-900 px-12 py-5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#378ADD] hover:text-white transition-all duration-300 shadow-xl"
                  >
                    Explorer le projet
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-[1px] bg-white/40" />
                    <span className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold">Vision 2030</span>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}