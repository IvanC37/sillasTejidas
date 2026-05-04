import { Droplet, Shield, Leaf } from 'lucide-react';

const materials = [
  {
    icon: Droplet,
    name: 'Hilo náutico',
    description: 'Duradero, resistente a exteriores, disponible en múltiples colores vibrantes',
    features: ['Resistente al agua', 'UV protegido', 'Alta durabilidad'],
    colors: ['#E74C3C', '#3498DB', '#F39C12', '#2ECC71', '#9B59B6', '#1ABC9C'],
    image: 'https://images.unsplash.com/photo-1756362399392-627cf9f09cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Shield,
    name: 'PVC',
    description: 'Resistente, de bajo mantenimiento, ideal para espacios interiores y exteriores',
    features: ['Fácil limpieza', 'No se decolora', 'Larga vida útil'],
    colors: ['#34495E', '#7F8C8D', '#BDC3C7', '#ECF0F1', '#95A5A6', '#2C3E50'],
    image: 'https://images.unsplash.com/photo-1766976898230-04881b248203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Leaf,
    name: 'Papel tejido',
    description: 'Estético, ecológico, perfecto para interiores con un toque natural y artesanal',
    features: ['Material natural', 'Acabado artesanal', 'Textura única'],
    colors: ['#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#6D4C41', '#5D4037'],
    image: 'https://images.unsplash.com/photo-1773847099245-04563f41ab3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function Materials() {
  return (
    <section id="materials" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Materiales premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada material es cuidadosamente seleccionado para garantizar calidad, durabilidad y belleza
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <material.icon className="text-accent" size={24} />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-medium text-foreground mb-3">
                  {material.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {material.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Colores disponibles:</h4>
                  <div className="flex gap-2 flex-wrap">
                    {material.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-full border-2 border-border shadow-sm hover:scale-110 transition-transform cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
