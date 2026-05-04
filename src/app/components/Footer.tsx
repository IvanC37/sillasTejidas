import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">Muebles Artesanales</h3>
            <p className="text-background/70 leading-relaxed">
              Creando piezas únicas que combinan tradición colombiana con diseño moderno.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contacto</h4>
            <div className="space-y-3 text-background/70">
              <a href="tel:+573001234567" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone size={18} />
                +57 300 123 4567
              </a>
              <a href="mailto:info@muebles.co" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail size={18} />
                info@muebles.co
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Muebles Artesanales Colombia. Hecho con dedicación.
          </p>
        </div>
      </div>
    </footer>
  );
}
