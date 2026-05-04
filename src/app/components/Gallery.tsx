const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1533044309907-0fa3413da946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Silla de cobre tejido',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1758486561455-ebd0d3ba7423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Silla de mimbre con patas metálicas',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1616213141730-3a3756a76207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Sala de estar moderna',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Sala de estar con sofás',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1764930680939-bfed8542e40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Gabinete tejido decorativo',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Silla en habitación',
    span: 'md:col-span-1 md:row-span-1',
  },
];

export function Gallery() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Inspiración real
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Muebles artesanales que transforman espacios reales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-2xl group cursor-pointer bg-muted`}
            >
              <div className="absolute inset-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-2">
            Cada pieza es única, hecha a mano por artesanos colombianos
          </p>
        </div>
      </div>
    </section>
  );
}
