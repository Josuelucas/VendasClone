import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { title: "A Verdadeira Páscoa", emoji: "🐑" },
  { title: "Arca de Noé", emoji: "🚢" },
  { title: "Criação do Mundo", emoji: "🌍" },
  { title: "Davi e Golias", emoji: "⚔️" },
  { title: "Jonas e a Baleia", emoji: "🐋" },
  { title: "Daniel na Cova dos Leões", emoji: "🦁" }
];

export default function ProductGallery() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Conheça Nossos Livros de Colorir
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Livros únicos para momentos de fé e relaxamento
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="hover-elevate overflow-hidden"
              data-testid={`card-product-${index}`}
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex flex-col items-center justify-center p-4">
                <div className="text-6xl mb-2">{product.emoji}</div>
                <div className="text-xs md:text-sm font-semibold text-center text-card-foreground">
                  {product.title}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-lg font-bold"
            onClick={scrollToPricing}
            data-testid="button-gallery-cta"
          >
            QUERO VER AS OFERTAS
          </Button>
        </div>
      </div>
    </section>
  );
}
