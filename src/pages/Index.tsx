import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed nav
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'sobre', 'solucoes', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = section === 'hero' 
          ? document.body 
          : document.getElementById(section);
        
        if (element) {
          const offsetTop = section === 'hero' ? 0 : element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      
      <main>
        <HeroSection onSectionChange={handleSectionChange} />
        <AboutSection />
        <SolutionsSection onSectionChange={handleSectionChange} />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container-custom text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Social TV. Todos os direitos reservados. 
            Conectando empresas ao futuro digital.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
