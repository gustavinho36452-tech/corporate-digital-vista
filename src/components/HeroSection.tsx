import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Monitor } from 'lucide-react';
import heroImage from '@/assets/hero-social-tv.jpg';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  return (
    <section className="pt-16 min-h-screen flex items-center gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Monitor className="w-4 h-4" />
                <span>TV Corporativa & Mídia Indoor</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Conecte sua empresa ao
                <span className="gradient-hero bg-clip-text text-transparent"> futuro digital</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Transforme a comunicação da sua empresa com nossa plataforma de TV Corporativa. 
                Comunique-se com colaboradores e clientes através de conteúdos digitais 
                informativos e interativos, de forma moderna e eficiente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => onSectionChange('solucoes')}
                className="gradient-primary text-white hover:shadow-glow transition-smooth"
              >
                Conheça as Soluções
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onSectionChange('sobre')}
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                <Play className="w-5 h-5 mr-2" />
                Nossa História
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Online</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Sem Limites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Disponível</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Social TV - Plataforma de TV Corporativa"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;