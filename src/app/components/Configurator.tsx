import { Armchair, Sofa, Table, MessageCircle, ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';

const furnitureTypes = [
  { id: 'chair', name: 'Silla', icon: Armchair, image: 'https://images.unsplash.com/photo-1533044309907-0fa3413da946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { id: 'sofa', name: 'Sofá', icon: Sofa, image: 'https://images.unsplash.com/photo-1579101324336-b71150dc9378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { id: 'table', name: 'Mesa', icon: Table, image: 'https://images.unsplash.com/photo-1616213141730-3a3756a76207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
];

const materials = [
  { id: 'nautico', name: 'Hilo náutico', description: 'Resistente y colorido', colors: ['#E74C3C', '#3498DB', '#F39C12', '#2ECC71', '#9B59B6', '#1ABC9C'] },
  { id: 'pvc', name: 'PVC', description: 'Bajo mantenimiento', colors: ['#34495E', '#7F8C8D', '#BDC3C7', '#ECF0F1', '#95A5A6', '#2C3E50'] },
  { id: 'papel', name: 'Papel tejido', description: 'Natural y artesanal', colors: ['#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#6D4C41', '#5D4037'] },
];

const dimensions = [
  { id: 'standard', name: 'Estándar', description: 'Medidas predefinidas' },
  { id: 'custom', name: 'Personalizado', description: 'Define tus medidas' },
];

interface ConfiguratorProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function Configurator({ whatsappNumber, whatsappMessage }: ConfiguratorProps) {
  const [step, setStep] = useState(1);
  const [selectedFurniture, setSelectedFurniture] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);

  const handleFurnitureSelect = (id: string) => {
    setSelectedFurniture(id);
    setTimeout(() => setStep(2), 300);
  };

  const handleMaterialSelect = (id: string) => {
    setSelectedMaterial(id);
    setSelectedColor(null);
    setTimeout(() => setStep(3), 300);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setTimeout(() => setStep(4), 300);
  };

  const handleDimensionSelect = (id: string) => {
    setSelectedDimension(id);
  };

  const getWhatsAppMessage = () => {
    const furnitureName = furnitureTypes.find(f => f.id === selectedFurniture)?.name;
    const materialName = materials.find(m => m.id === selectedMaterial)?.name;
    const dimensionName = dimensions.find(d => d.id === selectedDimension)?.name;

    return encodeURIComponent(
      `Hola! Quiero cotizar un diseño personalizado:\n` +
      `- Mueble: ${furnitureName}\n` +
      `- Material: ${materialName}\n` +
      `- Color: ${selectedColor}\n` +
      `- Dimensiones: ${dimensionName}`
    );
  };

  return (
    <section id="customization" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Crea tu mueble desde cero
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Sigue estos pasos para diseñar tu mueble ideal. Te guiaremos en cada decisión.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('catalog');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ShoppingBag size={18} />
            O explora nuestros diseños disponibles
          </button>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    s < step
                      ? 'bg-accent text-white'
                      : s === step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {s < step ? <Check size={20} /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-12 h-1 mx-2 transition-all ${
                      s < step ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
              Paso 1: Elige el tipo de mueble
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {furnitureTypes.map((furniture) => (
                <button
                  key={furniture.id}
                  onClick={() => handleFurnitureSelect(furniture.id)}
                  className={`group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border-2 ${
                    selectedFurniture === furniture.id ? 'border-primary' : 'border-border'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={furniture.image}
                      alt={furniture.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <furniture.icon className="mx-auto mb-3 text-primary" size={32} />
                    <h4 className="text-xl font-medium text-foreground">{furniture.name}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
              Paso 2: Selecciona el material
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => handleMaterialSelect(material.id)}
                  className={`bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border-2 ${
                    selectedMaterial === material.id ? 'border-primary' : 'border-border'
                  }`}
                >
                  <h4 className="text-xl font-medium text-foreground mb-2">{material.name}</h4>
                  <p className="text-muted-foreground mb-4">{material.description}</p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {material.colors.slice(0, 4).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && selectedMaterial && (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
              Paso 3: Escoge tu color
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {materials
                  .find((m) => m.id === selectedMaterial)
                  ?.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleColorSelect(color)}
                      className={`group relative aspect-square rounded-2xl border-4 transition-all hover:scale-110 ${
                        selectedColor === color ? 'border-primary shadow-xl' : 'border-border shadow-sm'
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === color && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Check className="text-primary" size={20} />
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
              Paso 4: Define las dimensiones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {dimensions.map((dimension) => (
                <button
                  key={dimension.id}
                  onClick={() => handleDimensionSelect(dimension.id)}
                  className={`bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border-2 ${
                    selectedDimension === dimension.id ? 'border-primary' : 'border-border'
                  }`}
                >
                  <h4 className="text-xl font-medium text-foreground mb-2">{dimension.name}</h4>
                  <p className="text-muted-foreground">{dimension.description}</p>
                </button>
              ))}
            </div>

            {selectedDimension && (
              <div className="text-center">
                <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto mb-8 border border-border">
                  <h4 className="text-xl font-medium text-foreground mb-4">
                    Resumen de tu diseño
                  </h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mueble:</span>
                      <span className="font-medium text-foreground">
                        {furnitureTypes.find((f) => f.id === selectedFurniture)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium text-foreground">
                        {materials.find((m) => m.id === selectedMaterial)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Color:</span>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-border"
                          style={{ backgroundColor: selectedColor || '' }}
                        />
                        <span className="font-medium text-foreground">{selectedColor}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimensiones:</span>
                      <span className="font-medium text-foreground">
                        {dimensions.find((d) => d.id === selectedDimension)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all shadow-lg text-lg"
                >
                  <MessageCircle size={24} />
                  Cotizar por WhatsApp
                </a>

                <p className="text-sm text-muted-foreground mt-4">
                  Te responderemos con un presupuesto personalizado en minutos
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
