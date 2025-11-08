import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    package: "Pacote Premium",
    location: "São Paulo - SP",
    rating: 5,
    message: "Compramos os livros para usar com feedback no grupo de mulheres da igreja, adoramos! 🙏✨"
  },
  {
    name: "João Santos",
    package: "Pacote Básico",
    location: "Rio de Janeiro - RJ",
    rating: 5,
    message: "Conteúdo excelente! As crianças da célula amaram colorir enquanto aprendiam."
  },
  {
    name: "Ana Costa",
    package: "Pacote Premium",
    location: "Brasília - DF",
    rating: 5,
    message: "Material de qualidade profissional. Recomendo para todas as igrejas! ❤️"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          O que nossos clientes dizem
        </h2>
        
        <div className="flex items-center justify-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-6 h-6 fill-accent text-accent" />
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mb-12">
          4.9/5 - 347 avaliações
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="hidden md:flex"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-4 transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="min-w-full md:min-w-[calc(50%-8px)] p-6"
                    data-testid={`card-testimonial-${index}`}
                  >
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                          👤
                        </div>
                        <div>
                          <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Comprou: {testimonial.package}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-card-foreground mb-2">{testimonial.message}</p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      {testimonial.location} · há 39 dias atrás
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="hidden md:flex"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                data-testid={`button-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
