import { ArrowRight } from 'lucide-react';

interface HeroProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function Hero({ whatsappNumber, whatsappMessage }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1579101324336-b71150dc9378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
          Diseña o elige tu mueble ideal
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
          Artesanía colombiana hecha a tu medida
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const section = document.getElementById('catalog');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg min-w-[240px]"
          >
            Ver muebles disponibles
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => {
              const section = document.getElementById('customization');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg min-w-[240px]"
          >
            Crear desde cero
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
