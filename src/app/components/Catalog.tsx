import { MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  basePrice: string;
  material: string;
  image: string;
  colors: string[];
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Silla Caribe',
    basePrice: '$450.000',
    material: 'Hilo náutico',
    image: 'https://images.unsplash.com/photo-1533044309907-0fa3413da946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    colors: ['#E74C3C', '#3498DB', '#F39C12', '#2ECC71'],
    description: 'Elegante silla tejida perfecta para espacios modernos',
  },
  {
    id: 2,
    name: 'Silla Minimal',
    basePrice: '$380.000',
    material: 'PVC',
    image: 'https://images.unsplash.com/photo-1758486561455-ebd0d3ba7423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    colors: ['#34495E', '#7F8C8D', '#BDC3C7', '#ECF0F1'],
    description: 'Diseño minimalista con estructura metálica',
  },
  {
    id: 3,
    name: 'Sofá Luna',
    basePrice: '$1.200.000',
    material: 'Papel tejido',
    image: 'https://images.unsplash.com/photo-1579101324336-b71150dc9378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    colors: ['#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63'],
    description: 'Sofá artesanal con acabado natural premium',
  },
  {
    id: 4,
    name: 'Mesa Trópico',
    basePrice: '$850.000',
    material: 'Hilo náutico',
    image: 'https://images.unsplash.com/photo-1616213141730-3a3756a76207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    colors: ['#1ABC9C', '#16A085', '#E67E22', '#D35400'],
    description: 'Mesa auxiliar tejida para exteriores',
  },
  {
    id: 5,
    name: 'Gabinete Artesano',
    basePrice: '$980.000',
    material: 'Papel tejido',
    image: 'https://images.unsplash.com/photo-1764930680939-bfed8542e40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    colors: ['#6D4C41', '#5D4037', '#4E342E', '#3E2723'],
    description: 'Gabinete decorativo con puertas tejidas',
  },
  {
    id: 6,
    name: 'Silla Moderna',
    basePrice: '$420.000',
    material: 'PVC',
    image: 'https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    colors: ['#95A5A6', '#2C3E50', '#E8DFD0', '#8B6F47'],
    description: 'Silla contemporánea para interiores',
  },
];

interface CatalogProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function Catalog({ whatsappNumber, whatsappMessage }: CatalogProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="catalog" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Muebles disponibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Explora nuestros diseños artesanales. Cada pieza puede personalizarse en color, material y dimensiones.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('customization');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <Sparkles size={18} />
            O crea tu propio diseño desde cero
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {product.basePrice}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-medium text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Material: {product.material}
                  </p>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Colores disponibles:
                  </p>
                  <div className="flex gap-2">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-border shadow-sm hover:scale-110 transition-transform cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hola! Me interesa personalizar el diseño: ${product.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Personalizar este diseño
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('customization');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all inline-flex items-center gap-2"
          >
            <Sparkles size={20} />
            Crear diseño personalizado
          </button>
        </div>
      </div>
    </section>
  );
}
