import { Armchair, Palette, Ruler, SwatchBook } from 'lucide-react';

const steps = [
  {
    icon: Armchair,
    title: 'Elige tu mueble',
    description: 'Sillas, sofás, mesas o piezas decorativas',
  },
  {
    icon: SwatchBook,
    title: 'Selecciona el material',
    description: 'Hilo náutico, PVC o papel tejido',
  },
  {
    icon: Palette,
    title: 'Escoge el color',
    description: 'Amplia variedad de tonos y acabados',
  },
  {
    icon: Ruler,
    title: 'Define medidas',
    description: 'Dimensiones personalizadas para tu espacio',
  },
];

export function CustomizationSteps() {
  return (
    <section id="customization" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Tu mueble en 4 pasos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple para crear la pieza perfecta que se adapte a tu estilo y necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-border group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <step.icon className="text-accent" size={28} />
              </div>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-light text-accent">{index + 1}</span>
                <h3 className="text-xl font-medium text-foreground pt-1">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Listo para comenzar?
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('materials');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all"
          >
            Ver materiales disponibles
          </button>
        </div>
      </div>
    </section>
  );
}
