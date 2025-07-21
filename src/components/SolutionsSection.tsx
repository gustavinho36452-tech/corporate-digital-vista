import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Tv, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Leaf, 
  Clock, 
  Users, 
  Store, 
  Megaphone, 
  Coffee,
  Network,
  CheckCircle 
} from 'lucide-react';

interface SolutionsSectionProps {
  onSectionChange: (section: string) => void;
}

const SolutionsSection = ({ onSectionChange }: SolutionsSectionProps) => {
  const features = [
    { icon: Users, title: 'Canal Direto', description: 'Comunicação direta com colaboradores e clientes' },
    { icon: Clock, title: 'Atualizações Automáticas', description: 'Conteúdo sempre atualizado sem intervenção manual' },
    { icon: CheckCircle, title: 'Sem Limites', description: 'Inserções ilimitadas de conteúdo' },
    { icon: Leaf, title: 'Ecológico', description: 'Redução significativa do uso de papel' },
    { icon: BarChart3, title: 'Relatórios', description: 'Acompanhe métricas de exibição em tempo real' },
    { icon: Cloud, title: '100% Online', description: 'Acesso remoto total à plataforma' }
  ];

  const contentTypes = [
    'Músicas e Playlists',
    'Dicas e Tutoriais',
    'Notícias Corporativas',
    'Previsão do Tempo',
    'Anúncios Promocionais',
    'Panfletos Digitais',
    'Conteúdo Institucional',
    'Comunicados Internos'
  ];

  const useCases = [
    {
      icon: Users,
      title: 'Comunicação Interna',
      description: 'Mantenha colaboradores informados sobre políticas, eventos e novidades da empresa',
      example: 'RH divulgando benefícios e campanhas internas'
    },
    {
      icon: Store,
      title: 'Marketing no PDV',
      description: 'Impulsione vendas com conteúdo promocional direcionado no ponto de venda',
      example: 'Lojas exibindo ofertas e novos produtos'
    },
    {
      icon: Megaphone,
      title: 'Campanhas Promocionais',
      description: 'Divulgue promoções, eventos e lançamentos de forma dinâmica e atrativa',
      example: 'Restaurantes promovendo pratos especiais'
    },
    {
      icon: Coffee,
      title: 'Entretenimento',
      description: 'Ofereça conteúdo interessante em salas de espera e áreas comuns',
      example: 'Clínicas exibindo dicas de saúde e bem-estar'
    },
    {
      icon: Network,
      title: 'Padronização',
      description: 'Mantenha comunicação consistente em toda rede de franquias ou filiais',
      example: 'Redes de farmácias com comunicação unificada'
    }
  ];

  return (
    <section id="solucoes" className="py-20 gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Soluções e Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra como é simples transformar qualquer TV em um poderoso canal de comunicação
          </p>
        </div>

        <Tabs defaultValue="como-funciona" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
            <TabsTrigger value="como-funciona">Como Funciona</TabsTrigger>
            <TabsTrigger value="vantagens">Vantagens</TabsTrigger>
            <TabsTrigger value="casos-uso">Cases de Uso</TabsTrigger>
          </TabsList>

          <TabsContent value="como-funciona" className="space-y-12">
            {/* How it Works */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Simples como deve ser
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Conecte sua TV</h4>
                      <p className="text-muted-foreground">Smart TV ou dispositivo HDMI com nosso app instalado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Personalize o conteúdo</h4>
                      <p className="text-muted-foreground">Controle total sobre o que será exibido em cada TV</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Publique e monitore</h4>
                      <p className="text-muted-foreground">Gerencie remotamente e acompanhe relatórios de exibição</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Tv className="w-6 h-6 text-primary" />
                    <span>Tipos de Conteúdo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {contentTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{type}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vantagens" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="casos-uso" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {useCase.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {useCase.description}
                        </p>
                        <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                          <p className="text-sm text-primary font-medium">
                            Exemplo: {useCase.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground">
              Qualquer empresa pode começar hoje mesmo. Não há complexidade técnica 
              ou investimentos pesados - apenas resultados reais.
            </p>
            <Button 
              size="lg"
              onClick={() => onSectionChange('contato')}
              className="gradient-primary text-white hover:shadow-glow transition-smooth"
            >
              Fale com Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;