import { Users, Church, Heart, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Células e Grupos",
    description: "Atividades interativas para engajar crianças durante reuniões",
    color: "bg-blue-500"
  },
  {
    icon: Church,
    title: "Escola Dominical",
    description: "Material complementar para aulas mais dinâmicas e envolventes",
    color: "bg-purple-500"
  },
  {
    icon: Heart,
    title: "Devocional Familiar",
    description: "Momentos especiais de conexão com Deus em família",
    color: "bg-teal-500"
  },
  {
    icon: GraduationCap,
    title: "Uso Pedagógico",
    description: "Ferramenta educativa que desenvolve coordenação e criatividade",
    color: "bg-orange-500"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Por que escolher nossos livros?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
              <CardContent className="p-6 text-center">
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
