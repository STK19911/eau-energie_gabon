import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Éléments de fond décoratifs et institutionnels */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#378ADD]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C8F135]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grille de fond subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mt-12">
        {/* Texte 404 Massif en arrière-plan */}
        <h1 className="text-[10rem] md:text-[16rem] font-black text-slate-200 leading-none tracking-tighter select-none drop-shadow-sm">
          404
        </h1>

        {/* Boîte de contenu superposée */}
        <div className="mt-[-5rem] md:mt-[-8rem] bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-slate-200 shadow-2xl relative z-20">
          <div className="w-12 h-1.5 bg-[#378ADD] mb-8 mx-auto rounded-full" />
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Page en construction
          </h2>
          
          <p className="text-slate-600 mb-10 text-sm md:text-base leading-relaxed">
            Le document ou la section du Ministère que vous tentez de consulter n'est pas encore disponible ou a été déplacé. Nos équipes travaillent actuellement sur le déploiement complet de la plateforme institutionnelle.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#378ADD] hover:scale-105 hover:shadow-lg hover:shadow-[#378ADD]/20"
          >
            <span>←</span> Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}