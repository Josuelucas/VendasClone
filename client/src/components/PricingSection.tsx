import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, Star, Crown } from "lucide-react";

export default function PricingSection() {
  const handleCheckout = (packageName: string) => {
    console.log(`Checkout iniciado para: ${packageName}`);
    alert(`Redirecionando para pagamento do ${packageName}`);
  };

  return (
    <section id="pricing-section" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <Badge className="bg-destructive text-destructive-foreground mb-4 px-4 py-2">
            OFERTA LIMITADA - Apenas no dia 08/11/25
          </Badge>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Escolha Sua Oferta Especial
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Livros de qualidade profissional para enriquecer seus momentos de fé
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="relative" data-testid="card-pricing-basic">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <h3 className="text-2xl font-bold text-card-foreground">Pacote Básico</h3>
              </div>
              
              <div className="space-y-2">
                <div className="text-muted-foreground line-through text-sm">R$ 47,00</div>
                <Badge className="bg-secondary text-secondary-foreground">-79%</Badge>
                <div className="text-5xl font-bold text-secondary">R$ 10,00</div>
                <div className="text-sm text-muted-foreground">Você economiza R$ 37,00</div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">35 Livros de Colorir em PDF</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Temas Bíblicos Variados</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Acesso Vitalício</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Suporte por WhatsApp</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Garantia de 7 dias</span>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg font-bold"
                onClick={() => handleCheckout('Pacote Básico')}
                data-testid="button-checkout-basic"
              >
                QUERO O PACOTE BÁSICO
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="relative border-accent border-4" data-testid="card-pricing-premium">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-accent text-accent-foreground px-6 py-2 text-sm font-bold">
                MAIS VENDIDO
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-4 pt-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-accent fill-accent" />
                <h3 className="text-2xl font-bold text-card-foreground">Pacote Premium</h3>
              </div>
              
              <div className="space-y-2">
                <div className="text-muted-foreground line-through text-sm">R$ 256,00</div>
                <Badge className="bg-secondary text-secondary-foreground">-93%</Badge>
                <div className="text-5xl font-bold text-secondary">R$ 17,00</div>
                <div className="text-sm text-muted-foreground">Você economiza R$ 239,00</div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-accent/10 rounded-lg p-4 space-y-2">
                <div className="font-semibold text-card-foreground text-sm mb-3">
                  TUDO DO PACOTE BÁSICO +
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 1: 2 Novos livros/mês</div>
                    <div className="text-xs text-destructive line-through">R$ 80/ano</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 2: Vídeos de Histórias Bíblicas</div>
                    <div className="text-xs text-destructive line-through">R$ 27,00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 3: 15 Versículos Ilustrados</div>
                    <div className="text-xs text-destructive line-through">R$ 18,00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 4: Calendário Bíblico Semanal</div>
                    <div className="text-xs text-destructive line-through">R$ 25,00</div>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex-col gap-3">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold"
                onClick={() => handleCheckout('Pacote Premium')}
                data-testid="button-checkout-premium"
              >
                QUERO O PACOTE PREMIUM
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                +500 pessoas já escolheram este pacote
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
