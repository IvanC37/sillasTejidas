import { Hero } from './components/Hero';
import { DecisionSection } from './components/DecisionSection';
import { Catalog } from './components/Catalog';
import { Configurator } from './components/Configurator';
import { Materials } from './components/Materials';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const whatsappNumber = "573001234567";
  const whatsappMessage = encodeURIComponent("Hola! Me gustaría diseñar un mueble personalizado");

  return (
    <div className="min-h-screen bg-background">
      <Hero whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <DecisionSection />
      <Catalog whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <Configurator whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <Materials />
      <Gallery />
      <About whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <Footer />

      <WhatsAppButton whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
    </div>
  );
}
