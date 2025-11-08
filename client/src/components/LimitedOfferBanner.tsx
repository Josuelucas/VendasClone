import { Clock } from "lucide-react";

export default function LimitedOfferBanner() {
  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4 text-center sticky top-0 z-50">
      <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
        <Clock className="w-4 h-4" />
        <span>OFERTA LIMITADA - Apenas no dia 08/11/25</span>
      </div>
    </div>
  );
}
