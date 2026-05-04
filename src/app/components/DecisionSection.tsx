import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

export function DecisionSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            ¿Cómo prefieres empezar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige tu camino: explora nuestros diseños listos o crea algo completamente único
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533044309907-0fa3413da946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Muebles disponibles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="text-primary" size={28} />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-medium text-foreground mb-3">
                Explorar catálogo
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Descubre nuestros diseños artesanales listos para personalizar. Elige tu favorito y ajústalo a tu gusto.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Diseños probados y populares
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Precios base claros
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Personalización disponible
                </li>
              </ul>

              <button
                onClick={() => {
                  const section = document.getElementById('catalog');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
              >
                Ver muebles disponibles
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1767390552768-6703f91c2518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Diseño personalizado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-accent" size={28} />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-medium text-foreground mb-3">
                Crear desde cero
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Diseña tu mueble ideal paso a paso. Controla cada detalle desde el material hasta las dimensiones.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Totalmente personalizado
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Proceso guiado paso a paso
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Pieza única y exclusiva
                </li>
              </ul>

              <button
                onClick={() => {
                  const section = document.getElementById('customization');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-6 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
              >
                Crear desde cero
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
