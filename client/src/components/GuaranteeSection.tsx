import { Shield, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GuaranteeSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="p-8 md:p-12">
            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-secondary" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">
              Garantia de 7 dias
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-secondary" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>SSL Protegido</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
