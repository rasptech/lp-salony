
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,1.35fr)_max-content_max-content_max-content] gap-10 sm:gap-12 md:gap-x-14 lg:gap-x-20 mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <img 
              src="https://horizons-cdn.hostinger.com/68caaa43-582a-4766-aa21-fa491638c064/64693ad5b9d664c83d03a03702a77caa.webp" 
              alt="Salony" 
              className="h-6 sm:h-7"
            />
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm md:max-w-[44ch]">
              Feito para salões que querem sair do improviso e operar com profissionalismo.
            </p>
            <p className="text-muted-foreground/90 font-normal leading-relaxed max-w-sm md:max-w-[34ch] mt-4">
              Seus dados estão protegidos • Pagamento seguro
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-foreground font-medium tracking-wide text-sm uppercase">Produto</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#recursos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Recursos</a></li>
              <li><a href="#precos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Preços</a></li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-foreground font-medium tracking-wide text-sm uppercase">Legal</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="https://salony.com.br/terms/" className="text-muted-foreground hover:text-primary transition-colors duration-300 md:whitespace-nowrap">Termos de Serviço</a></li>
              <li><a href="https://salony.com.br/privacy/" className="text-muted-foreground hover:text-primary transition-colors duration-300 md:whitespace-nowrap">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-foreground font-medium tracking-wide text-sm uppercase">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="mailto:contato@salony.com.br" className="text-muted-foreground hover:text-primary transition-colors duration-300 md:whitespace-nowrap">contato@salony.com.br</a></li>
              <li><a href="https://wa.me/5511932725236" className="text-muted-foreground hover:text-primary transition-colors duration-300 md:whitespace-nowrap">WhatsApp: 11 93272-5236</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-border text-sm text-muted-foreground font-light text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Salony. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Salony é um produto desenvolvido por Rasptech Soluções - 32.755.426/0001-41</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
