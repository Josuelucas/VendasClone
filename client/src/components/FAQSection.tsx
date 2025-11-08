import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como recebo os livros?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download de todos os livros em formato PDF. O acesso é imediato e vitalício."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! Você pode imprimir quantas cópias precisar para uso pessoal, familiar ou em sua igreja. Os arquivos são seus para sempre."
  },
  {
    question: "Qual a faixa etária recomendada?",
    answer: "Os livros são perfeitos para crianças de 3 a 12 anos. O conteúdo é adaptado para diferentes níveis de habilidade e compreensão."
  },
  {
    question: "Como funciona o bônus mensal?",
    answer: "No Pacote Premium, você receberá 2 novos livros exclusivos todo mês por e-mail, sem custo adicional, mantendo sua biblioteca sempre atualizada."
  }
];

export default function FAQSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto mb-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-muted/50 rounded-lg px-6 border-none"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-lg font-bold"
            onClick={scrollToPricing}
            data-testid="button-faq-cta"
          >
            TIREI MINHAS DÚVIDAS, QUERO COMPRAR
          </Button>
        </div>
      </div>
    </section>
  );
}
