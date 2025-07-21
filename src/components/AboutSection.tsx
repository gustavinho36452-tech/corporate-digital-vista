import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Plataforma moderna que une TV Corporativa com Mídia Indoor de forma inteligente.'
    },
    {
      icon: Target,
      title: 'Objetivo',
      description: 'Criar um canal direto entre empresas e seu público, fortalecendo a comunicação.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Entrega de informação, entretenimento e comunicados com velocidade e eficiência.'
    },
    {
      icon: Users,
      title: 'Acessibilidade',
      description: 'Solução fácil de usar, acessível e pensada para qualquer tipo de empresa.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre a Social TV
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nascemos da ideia de revolucionar a comunicação empresarial, 
            unindo tecnologia e praticidade em uma única plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Nossa História
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Social TV surgiu da necessidade de criar uma solução moderna e eficiente 
                para a comunicação empresarial. Vimos que as empresas precisavam de uma 
                forma mais dinâmica de se comunicar com colaboradores e clientes, 
                indo além dos métodos tradicionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa proposta é simples e poderosa: transformar qualquer TV em um 
                canal de comunicação inteligente, oferecendo conteúdos personalizados, 
                informativos e interativos que realmente fazem a diferença no dia a dia 
                das empresas.
              </p>
            </div>

            <div className="p-6 gradient-subtle rounded-xl border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Nossa Missão
              </h4>
              <p className="text-muted-foreground">
                Democratizar a comunicação digital empresarial, oferecendo uma plataforma 
                acessível, moderna e eficiente que conecta empresas ao seu público de 
                forma inovadora e impactante.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Nossos Diferenciais
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">Moderno</div>
              <p className="text-muted-foreground">
                Tecnologia de ponta com interface intuitiva e design contemporâneo
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-accent">Acessível</div>
              <p className="text-muted-foreground">
                Solução econômica que cabe no orçamento de empresas de todos os tamanhos
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary-glow">Eficiente</div>
              <p className="text-muted-foreground">
                Resultados rápidos com impacto real na comunicação empresarial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;