
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar, Wallet, Users, Clock, TrendingUp,
  Shield, ArrowRight, CheckCircle2, Smartphone,
  Star, Award, Zap, BarChart3, Scissors, Medal, Gem,
  Hourglass
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const seals = [
    {
      level: 'NOVO',
      discount: '0%',
      price: '69,90',
      color: 'bg-white border-[#10b981]',
      iconColor: 'text-[#10b981]',
      iconBg: 'bg-[#10b981]/10',
      shadow: 'shadow-[0_4px_16px_rgba(16,185,129,0.15)]',
      desc: 'Aqui começa a organização do seu salão.',
      Icon: Star
    },
    {
      level: 'REVELAÇÃO',
      discount: '10%',
      price: '62,91',
      color: 'bg-white border-[#3b82f6]',
      iconColor: 'text-[#3b82f6]',
      iconBg: 'bg-[#3b82f6]/10',
      shadow: 'shadow-[0_4px_16px_rgba(59,130,246,0.15)]',
      desc: 'Você começa a usar de verdade e já vê resultado.',
      Icon: Zap
    },
    {
      level: 'PRATA',
      discount: '20%',
      price: '55,92',
      color: 'bg-white border-[#d4d4d8]',
      iconColor: 'text-[#71717a]',
      iconBg: 'bg-[#f4f4f5]',
      shadow: 'shadow-[0_4px_16px_rgba(212,212,216,0.3)]',
      desc: 'Seu salão começa a rodar com organização.',
      Icon: Medal
    },
    {
      level: 'OURO',
      discount: '35%',
      price: '45,43',
      color: 'bg-white border-[#fbbf24]',
      iconColor: 'text-[#d97706]',
      iconBg: 'bg-[#fef3c7]',
      shadow: 'shadow-[0_8px_24px_rgba(251,191,36,0.25)]',
      desc: 'Seu salão já funciona redondo e com qualidade.',
      Icon: Award
    },
    {
      level: 'DIAMANTE',
      discount: '50%',
      price: '34,95',
      color: 'bg-[#111827] border-[#111827] text-white',
      iconColor: 'text-white',
      iconBg: 'bg-white/10',
      shadow: 'shadow-[0_12px_32px_rgba(17,24,39,0.4)]',
      desc: 'Seu salão está em alto nível de organização e atendimento.',
      Icon: Gem
    }
  ];

  return (
    <div className="bg-[#f9f9f9]">
      <Helmet>
        <title>Salony | Gestão profissional para salões que querem sair do improviso</title>
        <meta
          name="description"
          content="A Salony não é para todo salão. É para quem quer parar de perder cliente por desorganização e assumir uma gestão profissional."
        />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <link rel="canonical" href="https://lp.salony.com.br/" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Salony | Gestão profissional para salões que querem sair do improviso" />
        <meta
          property="og:description"
          content="Para donos de salão que querem organizar agenda, reduzir falhas e levar a gestão a sério."
        />
        <meta property="og:url" content="https://lp.salony.com.br/" />
        <meta property="og:site_name" content="Salony" />
        <meta property="og:image" content="https://salony.com.br/assets/logo-salony.png" />
        <meta property="og:image:alt" content="Logo da Salony" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salony | Gestão profissional para salões que querem sair do improviso" />
        <meta
          name="twitter:description"
          content="Se sua agenda vive no WhatsApp, você perde cliente sem perceber. Veja se a Salony faz sentido para o seu salão."
        />
        <meta name="twitter:image" content="https://salony.com.br/assets/logo-salony.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://lp.salony.com.br/#organization",
                name: "Salony",
                url: "https://lp.salony.com.br/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://salony.com.br/assets/logo-salony.png"
                },
                sameAs: [
                  "https://salony.com.br/",
                  "https://lp.salony.com.br/"
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://lp.salony.com.br/#webpage",
                url: "https://lp.salony.com.br/",
                name: "Salony | Gestão profissional para salões que querem sair do improviso",
                description: "Landing page da Salony para donos de salão que querem organizar agenda, confirmar clientes e operar com padrão profissional.",
                inLanguage: "pt-BR",
                isPartOf: {
                  "@id": "https://lp.salony.com.br/#website"
                },
                about: {
                  "@id": "https://lp.salony.com.br/#organization"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://lp.salony.com.br/#website",
                url: "https://lp.salony.com.br/",
                name: "Salony",
                inLanguage: "pt-BR"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#005151]">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#005151]/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#005151]/60 to-[#005151] z-10" />
          <img
            src="https://images.unsplash.com/photo-1564479893852-180ac6065b2b"
            alt="Interior de salão premium"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 pb-14 sm:pb-20 lg:pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-left">
              <FadeIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.5px] leading-[1.15] mb-6 sm:mb-8">
                  Seu salão pode ser mais organizado e mais profissional.
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-lg sm:text-xl text-white/90 font-medium max-w-xl mb-8 sm:mb-12 leading-[1.5]">
                  Organize sua agenda, reduza faltas e tenha mais controle no dia a dia.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="w-full sm:w-fit">
                  <a
                    href="https://cadastro.salony.com.br/"
                    data-cta="cta_hero_primary"
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-[#005151] font-semibold rounded-[12px] py-[14px] sm:py-[16px] px-[28px] sm:px-[40px] text-base sm:text-lg shadow-[0_8px_24px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)]"
                  >
                    Quero organizar meu salão
                  </a>
                  <p className="mt-2 text-sm text-white/80 font-normal text-right">
                    7 dias para testar sem risco
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Realistic Smartphone Mockup Integration */}
            <FadeIn delay={0.8} direction="left" className="hidden lg:flex justify-center relative">
              <div className="relative w-[320px] h-[650px] bg-white rounded-[24px] p-3 phone-mockup phone-shine border border-white/40">
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                  <div className="w-32 h-6 bg-white rounded-b-3xl"></div>
                </div>
                <div className="w-full h-full bg-[#f9f9f9] rounded-[16px] overflow-hidden relative flex flex-col border border-gray-100">

                  {/* App Header */}
                  <div className="bg-[#005151] text-white pt-12 pb-6 px-6 rounded-b-[24px] shadow-sm relative z-20">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-semibold text-xl tracking-normal">Agenda</h3>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-white/80 text-sm font-medium">Hoje, 28 de Março</p>
                  </div>

                  {/* Appointments List */}
                  <div className="flex-1 p-4 space-y-3 overflow-hidden relative z-10 -mt-4 pt-8">
                    {[
                      { time: '09:00', service: 'Corte', client: 'João Silva', status: 'done' },
                      { time: '10:00', service: 'Escova', client: 'Maria Santos', status: 'waiting' },
                      { time: '11:00', service: 'Manicure', client: 'Ana Costa', status: 'done' },
                      { time: '14:00', service: 'Coloração', client: 'Paula Oliveira', status: 'waiting' },
                      { time: '15:30', service: 'Hidratação', client: 'Beatriz Lima', status: 'done' }
                    ].map((apt, i) => (
                      <div key={i} className="bg-white p-4 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-50 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <div className="text-sm font-semibold text-[#005151] w-12">{apt.time}</div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{apt.service}</div>
                            <div className="text-xs text-gray-500">{apt.client}</div>
                          </div>
                        </div>
                        {apt.status === 'done' ? (
                          <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                        ) : (
                          <Hourglass className="w-5 h-5 text-[#fbbf24]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card 1 (Primary) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-40 bg-white/95 backdrop-blur-md p-5 rounded-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-white flex items-center gap-4 z-40"
              >
                <div className="w-12 h-12 bg-[#10b981]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-gray-900 leading-tight">Maria Silva agendou agora</p>
                  <p className="text-[13px] text-gray-500 mt-0.5">Confirmado automaticamente</p>
                </div>
              </motion.div>

              {/* Floating Card 2 (Secondary) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-16 bottom-32 bg-white/95 backdrop-blur-md p-4 rounded-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-white flex items-center gap-3 z-40"
              >
                <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">+1 cliente confirmado hoje</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <FadeIn direction="right">
                <div className="relative rounded-[16px] overflow-hidden aspect-[4/5] shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                  <img
                    src="https://images.unsplash.com/photo-1606845796844-3bfe8830e1ca"
                    alt="Equipe de salão"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005151]/80 to-transparent" />
                </div>
              </FadeIn>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2]">
                  Quando o salão não está organizado, o prejuízo aparece.
                </h2>
              </FadeIn>
              <div className="space-y-8">
                {[
                  { icon: Smartphone, title: 'Agenda no WhatsApp', desc: 'Mensagem se perde, horário se mistura e você precisa ficar respondendo o tempo todo.' },
                  { icon: Wallet, title: 'Sem controle do dinheiro', desc: 'Você trabalha o mês inteiro e no final não sabe quanto realmente ganhou.' },
                  { icon: Users, title: 'Cliente esquece o horário', desc: 'Sem aviso, a cadeira fica vazia e o dinheiro não volta.' },
                  { icon: Clock, title: 'Horários bagunçados', desc: 'Um atraso puxa o outro e o dia vira um estresse.' },
                  { icon: Shield, title: 'Tudo depende de você', desc: 'Se você não responde, nada anda.' }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i}>
                    <div className="flex gap-6 group premium-card">
                      <div className="w-14 h-14 rounded-[12px] bg-[#f9f9f9] flex items-center justify-center flex-shrink-0 group-hover:bg-[#005151] transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-[#005151] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-[20px] font-semibold text-[#333333] mb-2 leading-[1.5]">{item.title}</h3>
                        <p className="text-[15px] sm:text-[16px] text-[#555555] leading-[1.6]">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.6}>
                <div className="pt-8 border-t border-gray-200 mt-8">
                  <div className="relative rounded-[14px] border border-[#005151]/12 bg-[#005151]/[0.03] px-5 sm:px-6 py-4 sm:py-5">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-[#005151]/30" />
                    <p className="pl-4 text-lg sm:text-[20px] font-medium text-[#005151] tracking-[0.2px] leading-[1.55]">
                      O problema não é cliente.
                      <span className="font-semibold text-[#004a4a]"> É a forma como o salão está sendo organizado.</span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSFORMATION */}
      <section className="py-16 md:py-20 lg:py-32 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2] mb-6">
              Com a Salony, seu salão entra no controle.
            </h2>
            <p className="text-lg sm:text-[20px] font-medium text-[#333333] leading-[1.5]">
              Menos bagunça no dia a dia, mais controle do que acontece no seu salão.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-16 sm:mb-20">
            {[
              { title: 'Agenda organizada de verdade', desc: 'Sem mensagem perdida, sem horário duplicado e sem confusão.' },
              { title: 'Você entende quanto está ganhando', desc: 'Veja o que entrou, o que saiu e quanto realmente ficou.' },
              { title: 'Menos faltas, mais horários preenchidos', desc: 'Clientes recebem lembretes e comparecem muito mais.' },
              { title: 'Seu dia fica mais leve', desc: 'Menos correria, menos imprevisto e mais organização.' },
              { title: 'Sua equipe funciona melhor', desc: 'Tudo organizado, sem você precisar resolver tudo o tempo todo.' },
              { title: 'Pronto para crescer com consistência', desc: 'Com tudo organizado, crescer deixa de ser sorte.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="text-left premium-card">
                <div className="w-14 h-14 rounded-[12px] bg-[#005151]/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#005151]" />
                </div>
                <h3 className="text-lg sm:text-[20px] font-semibold text-[#333333] mb-3 leading-[1.5]">{item.title}</h3>
                <p className="text-[15px] sm:text-[16px] text-[#555555] leading-[1.6]">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="relative inline-block w-full max-w-4xl bg-white px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 text-left overflow-hidden">
              <div className="absolute left-0 top-5 bottom-5 w-1.5 rounded-r-full bg-[#005151]/25" />
              <span className="block pl-4 sm:pl-6 text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#005151]/70 mb-2">
                Em uma frase
              </span>
              <p className="pl-4 sm:pl-6 text-xl sm:text-[22px] font-semibold text-[#005151] leading-[1.45]">
                <span className="block">Não é sobre ter mais clientes.</span>
                <span className="block mt-1 font-bold text-[#004747]">É sobre conseguir atender melhor os que você já tem.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: FEATURES AS BENEFITS */}
      <section id="recursos" className="py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <div className="lg:col-span-12 mb-12">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2]">
                  Tudo no seu salão funcionando do jeito certo.
                </h2>
              </FadeIn>
            </div>

            {/* Bento Grid Layout - 4 Items */}
            <FadeIn delay={0.1} className="lg:col-span-8">
              <div className="bg-[#f9f9f9] rounded-[16px] p-6 sm:p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-gray-200 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10 max-w-md">
                  <div className="w-16 h-16 bg-white rounded-[12px] flex items-center justify-center mb-8 shadow-sm">
                    <Calendar className="w-8 h-8 text-[#005151]" />
                  </div>
                  <h3 className="text-2xl sm:text-[28px] font-bold text-[#005151] mb-4 leading-[1.2]">Sua agenda se organiza sozinha.</h3>
                  <p className="text-base sm:text-[18px] text-[#555555] leading-[1.6]">
                    Os horários se encaixam, os clientes recebem lembretes e o dia flui sem confusão.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-5 pointer-events-none">
                  <Calendar className="w-full h-full text-[#005151] translate-x-1/4 translate-y-1/4" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-4">
              <div className="bg-[#005151] rounded-[16px] p-6 sm:p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,81,81,0.3)] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-[12px] flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold mb-4 leading-[1.2]">Você entende o dinheiro do seu salão.</h3>
                  <p className="text-[16px] text-white/80 leading-[1.6]">
                    Veja quanto entrou, quanto saiu e quanto realmente ficou no seu bolso.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="lg:col-span-4">
              <div className="bg-white rounded-[16px] p-6 sm:p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-gray-100">
                <div className="w-16 h-16 bg-[#f9f9f9] rounded-[12px] flex items-center justify-center mb-8">
                  <Users className="w-8 h-8 text-[#005151]" />
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#005151] mb-4 leading-[1.2]">Sua equipe trabalha organizada.</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">
                  Cada um sabe o que fazer, sem depender de você o tempo todo.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="lg:col-span-8">
              <div className="relative rounded-[16px] overflow-hidden h-full min-h-[280px] sm:min-h-[320px] group shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1620751157376-a63285d6ec6c"
                  alt="Organização"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005151]/90 via-[#005151]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[12px] flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-[28px] font-bold text-white mb-4 leading-[1.2]">Você decide com clareza.</h3>
                  <p className="text-base sm:text-[18px] text-white/90 leading-[1.6] max-w-md">
                    Você entende o que está acontecendo no seu salão e sabe o que precisa ajustar.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SECTION 5: REPUTATION SEALS */}
      <section id="selos" className="py-16 md:py-20 lg:py-32 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#005151] font-bold tracking-wider uppercase text-sm mb-4 block">Seu desempenho é recompensado</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2] mb-8">
              Quanto melhor seu salão funciona, menos você paga.
            </h2>
            <p className="text-lg sm:text-[20px] font-medium text-[#333333] leading-[1.5] mb-6">
              Seu atendimento, organização e consistência reduzem o valor da sua mensalidade.
            </p>
            <p className="text-[18px] text-[#005151] font-semibold">
              Salões que usam de verdade evoluem rápido e começam a pagar menos.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-300 -translate-y-1/2 z-0" />

            {seals.map((seal, index) => (
              <FadeIn key={index} delay={index * 0.15} className="relative z-10">
                <div className={`rounded-[16px] p-6 lg:p-8 border-2 ${seal.color} ${seal.shadow} h-full flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2`}>
                  <div className={`w-20 h-20 rounded-[12px] ${seal.iconBg} flex items-center justify-center mb-6`}>
                    <seal.Icon className={`w-10 h-10 ${seal.iconColor}`} />
                  </div>
                  <h3 className={`text-[14px] font-bold tracking-widest uppercase mb-2 ${seal.level === 'DIAMANTE' ? 'text-white/80' : 'text-gray-500'}`}>
                    {seal.level}
                  </h3>
                  <div className={`text-[40px] font-bold tracking-tight mb-4 leading-none ${seal.level === 'DIAMANTE' ? 'text-white' : 'text-[#005151]'}`}>
                    {seal.level === 'NOVO' ? seal.discount : `-${seal.discount}`}
                  </div>
                  <div className={`text-[16px] font-semibold mb-4 ${seal.level === 'DIAMANTE' ? 'text-white/90' : 'text-gray-800'}`}>
                    R$ {seal.price}<span className="font-normal opacity-70">/mês</span>
                  </div>
                  <p className={`text-[14px] mt-auto leading-[1.5] ${seal.level === 'DIAMANTE' ? 'text-white/70' : 'text-gray-500'}`}>
                    {seal.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: REPUTATION AND STATUS */}
      <section className="py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-10">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2]">
                  Salão organizado aparece mais, atende melhor e paga menos.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-[20px] font-medium text-[#333333] leading-[1.5]">
                  Quando seu salão funciona bem, ele ganha mais destaque, atrai melhores clientes e ainda paga menos na mensalidade.
                </p>
              </FadeIn>
              <div className="space-y-6">
                {[
                  'Seu salão aparece mais dentro da plataforma',
                  'Seu salão passa mais confiança para o cliente',
                  'Chegam clientes que realmente valorizam seu serviço'
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.3 + (i * 0.1)} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#005151]/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-[#005151]" />
                    </div>
                    <span className="text-[17px] sm:text-[18px] text-[#333333] font-semibold">{item}</span>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="left" className="relative">
              <div className="aspect-square rounded-full bg-[#f9f9f9] absolute -inset-10 blur-3xl opacity-50"></div>
              <div className="relative bg-[#111827] rounded-[16px] p-8 sm:p-10 md:p-12 border border-gray-800 shadow-[0_20px_40px_rgba(17,24,39,0.3)] text-center text-white">
                <Gem className="w-24 h-24 text-white mx-auto mb-8" />
                <h3 className="text-[22px] sm:text-[24px] font-bold mb-4 leading-[1.2]">Selo Diamante — até 50% de desconto na mensalidade</h3>
                <p className="text-[16px] text-white/80 leading-[1.6]">
                  Aqui estão os salões que realmente se destacam no atendimento, organização e consistência.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 7: SUBSCRIPTION VALUE */}
      <section id="precos" className="py-16 md:py-20 lg:py-32 bg-[#005151] text-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.5px] leading-[1.2] mb-8">
              Um horário vazio já custa mais que a mensalidade.
            </h2>
            <p className="text-lg sm:text-[20px] font-medium text-white/90 leading-[1.5] mb-12 sm:mb-16">
              Se o seu salão não está organizado, você já está perdendo dinheiro todos os dias.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-5 md:gap-6 items-stretch max-w-4xl mx-auto">
              <div className="bg-white/10 border border-white/20 rounded-[16px] p-8 sm:p-10 md:p-12 backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.2)]">
                <div className="text-[14px] font-bold tracking-widest uppercase text-white/70 mb-6">Plano completo para organizar seu salão</div>
                <div className="flex items-baseline justify-center gap-2 mb-8">
                  <span className="text-[32px] font-medium text-white/80">R$</span>
                  <span className="text-[56px] sm:text-[64px] md:text-[72px] font-bold tracking-tight leading-none">69,90</span>
                  <span className="text-[18px] sm:text-[20px] font-medium text-white/70">/mês</span>
                </div>
                <p className="text-[16px] text-white/90 leading-[1.6] mb-10">
                  Você começa pagando isso. Conforme seu salão evolui, o valor diminui.
                </p>
                <a
                  href="https://cadastro.salony.com.br/"
                  data-cta="cta_pricing_primary"
                  className="block w-full bg-white text-[#005151] font-bold rounded-[12px] py-[14px] sm:py-[16px] px-[24px] sm:px-[32px] text-base sm:text-lg shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]"
                >
                  Quero organizar meu salão agora
                </a>
                <p className="mt-3 text-[13px] sm:text-[14px] text-white/85">
                  *Menos de R$2 por dia para colocar seu salão no controle.
                </p>
                <p className="mt-6 text-[14px] text-white/80 font-medium">
                  Você tem 7 dias para testar com tranquilidade
                </p>
                <p className="mt-2 text-[13px] sm:text-[14px] text-white/75">
                  Sem fidelidade. Cancele quando quiser.
                </p>
              </div>

              <div className="text-left bg-white/5 border border-white/15 rounded-[16px] p-5 sm:p-6 backdrop-blur-[2px]">
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-white/70 mb-4">
                  Seu salão funcionando do jeito certo
                </p>
                <div className="space-y-3">
                  {[
                    'Agenda organizada que evita horários vazios',
                    'Lembretes que fazem o cliente não esquecer',
                    'Tudo organizado em um só lugar',
                    'Você entende o que está acontecendo no salão',
                    'Seu salão passa mais confiança para novos clientes',
                    'Você sabe quanto realmente está ganhando',
                    'E muito mais'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white/75 mt-0.5 flex-shrink-0" />
                      <p className="text-[14px] leading-[1.45] text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8: GUARANTEE */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn>
            <div className="w-24 h-24 bg-white rounded-[16px] flex items-center justify-center mx-auto mb-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100">
              <Shield className="w-12 h-12 text-[#005151]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2] mb-6">
              Você pode testar sem risco.
            </h2>
            <p className="text-lg sm:text-[20px] font-medium text-[#333333] leading-[1.5] mb-8">
              Use por 7 dias. Se não sentir diferença no seu dia a dia, devolvemos 100% do valor.
            </p>
            <p className="text-xl sm:text-[22px] font-bold text-[#005151]">
              O único risco é continuar do mesmo jeito.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section id="cta" className="py-16 md:py-20 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#005151] tracking-[0.5px] leading-[1.2] mb-8">
              Seu salão mais organizado começa agora.
            </h2>
            <p className="text-lg sm:text-[20px] font-medium text-[#333333] leading-[1.5] mb-10 sm:mb-12 max-w-2xl mx-auto">
              Se você quer mais controle, menos bagunça e um salão funcionando melhor, esse é o próximo passo.
            </p>
            <a
              href="https://cadastro.salony.com.br/"
              data-cta="cta_final_primary"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-[#005151] text-white font-bold rounded-[12px] py-[16px] sm:py-[20px] px-[28px] sm:px-[48px] text-lg sm:text-xl shadow-[0_8px_24px_rgba(0,81,81,0.25)] transition-all duration-300 hover:bg-[#003d3d] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,81,81,0.35)] group"
            >
              Quero organizar meu salão
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <p className="mt-6 text-[16px] text-[#555555] font-medium">
              7 dias para testar sem risco
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
