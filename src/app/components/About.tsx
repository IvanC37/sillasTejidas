import { MessageCircle, Heart, Award, Users } from 'lucide-react';

interface AboutProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

const values = [
  {
    icon: Heart,
    title: 'Hecho a mano',
    description: 'Cada pieza es tejida con dedicación y pasión',
  },
  {
    icon: Award,
    title: 'Calidad superior',
    description: 'Materiales premium y técnicas tradicionales',
  },
  {
    icon: Users,
    title: 'Artesanos colombianos',
    description: 'Apoyamos el talento local y la tradición',
  },
];

export function About({ whatsappNumber, whatsappMessage }: AboutProps) {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
              Tradición que se adapta a tu hogar
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos una familia de artesanos colombianos que combina técnicas tradicionales
              de tejido con diseño contemporáneo. Cada mueble es una pieza única, creada
              especialmente para ti con materiales de la más alta calidad.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Nuestro compromiso es crear muebles que no solo embellezcan tu espacio,
              sino que cuenten una historia de dedicación, cultura y arte colombiano.
            </p>

            <div className="space-y-6 mb-12">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all shadow-md"
            >
              <MessageCircle size={20} />
              Comienza tu proyecto
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1767390552768-6703f91c2518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Artesano tejiendo"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-3xl font-medium mb-2">15+ años</p>
              <p className="text-primary-foreground/80">
                de experiencia en tejido artesanal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
