import { Zap, Cpu, Shield, ArrowRight, ArrowUpRight, TrendingUp, Building2 } from 'lucide-react';
import tecnico from './assets/tecnico.png';

import Hero from './components/sections/Hero';
import SociosSection from './components/sections/SociosSection';
import Navbar from './components/sections/NavBar';

export default function AuraLandingPage() {
  return (
    <div className="bg-[#12111F] text-white font-sans selection:bg-[#FE7F32] selection:text-white">
      
      <Navbar />

      <Hero />

      {/* SEÇÃO 01: VISÃO ESTRATÉGICA */}
      {/* SEÇÃO 02: NOSSOS SERVIÇOS (ECOSSISTEMA INTEGRADO) */}
      <section id="servicos" className="py-32 px-6 bg-[#0d0c16]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em]">Sistemas Completos</span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">O Ecossistema <span className="text-[#FE7F32] font-medium">Aura</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Energia Solar Inteligente', 
                desc: 'Monitoramento, armazenamento e gestão de consumo 100% integrados à sua rede.',
                icon: <Zap size={32} />,
                tag: 'Geração'
              },
              { 
                title: 'Automação de Ambientes', 
                desc: 'Gestão de cargas, iluminação e clima que conversam nativamente com o seu sistema solar.',
                icon: <Cpu size={32} />,
                tag: 'Gestão'
              },
              { 
                title: 'Segurança Avançada', 
                desc: 'CFTV e sensores integrados que alertam e operam em conjunto com a automação residencial.',
                icon: <Shield size={32} />,
                tag: 'Proteção'
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-[#12111F] p-10 rounded-[40px] border border-white/5 hover:border-[#FE7F32]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl">
                {/* Efeito de luz no hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FE7F32]/10 rounded-full blur-[60px] group-hover:bg-[#FE7F32]/20 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-5 bg-[#FE7F32]/10 text-[#FE7F32] rounded-3xl group-hover:bg-[#FE7F32] group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 border border-white/10 px-3 py-1 rounded-full group-hover:border-[#FE7F32]/30 group-hover:text-[#FE7F32] transition-all">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase mb-4 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#FE7F32] group-hover:gap-4 transition-all">
                    Saiba Mais <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé da Seção: Visão Integrada */}
          <div className="mt-12 p-8 rounded-[40px] border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
            <p className="text-xs uppercase tracking-[0.2em] font-medium italic">
              "Não entregamos serviços isolados, mas sistemas integrados e escaláveis"
            </p>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#FE7F32] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <SociosSection />

      {/* SEÇÃO 03: PERFORMANCE & VALOR (ROI INTEGRADO) */}
<section className="relative py-32 md:py-48 px-6 bg-[#0d0c16] overflow-hidden">
  
  {/* IMAGEM DE BACKGROUND + OVERLAY DE GRADIENTE */}
  <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
    <img 
      src={tecnico}
      alt="Residência Inteligente Aura" 
      className="w-full h-full object-cover"
    />
    {/* Gradiente sutil para garantir legibilidade do texto à esquerda e nos cards */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c16] via-[#0d0c16]/30 to-transparent" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
    
    {/* Lado Esquerdo: Texto Principal */}
    <div className="md:col-span-6 space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
      <div className="space-y-4">
        <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.5em] block">Retorno de Investimento (ROI)</span>
        <h2 className="text-6xl md:text-8xl font-light leading-[0.85] tracking-tighter uppercase text-white">
          Infraestrutura <br />
          <span className="text-[#FE7F32] font-medium">Rentável</span>
        </h2>
      </div>
      
      <p className="max-w-xl text-gray-200 text-lg md:text-xl font-light leading-relaxed">
        Não entregamos apenas equipamentos. Desenvolvemos ecossistemas onde energia, automação e segurança conversam nativamente, garantindo máxima eficiência e economia real.
      </p>

      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6">
        <div>
          <span className="block text-4xl font-light text-white italic">Ativo</span>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Econômico e Sustentável</p>
        </div>
        <div>
          <span className="block text-4xl font-light text-white italic">Infra</span>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Sistemas Integrados</p>
        </div>
      </div>
    </div>

    {/* Lado Direito: Cards de Destaque Financeiro */}
    <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 md:pt-0">
      
      {/* Card 1: Economia Mensal */}
      <div className="group bg-[#12111F]/80 backdrop-blur-md p-10 rounded-[40px] border border-white/5 hover:border-[#FE7F32]/40 transition-all duration-500 shadow-2xl space-y-6">
        <div className="flex justify-between items-center text-[#FE7F32]">
          <TrendingUp size={28} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 border border-white/10 px-3 py-1 rounded-full group-hover:border-[#FE7F32]/30 group-hover:text-[#FE7F32] transition-all">Eficiência</span>
        </div>
        <h3 className="text-5xl font-black tracking-tighter text-white">95%</h3>
        <p className="text-sm font-bold uppercase tracking-widest text-white/80">Redução na Conta de Luz</p>
        <p className="text-xs text-gray-500 leading-relaxed">Nossa gestão inteligente elimina desperdícios integrando geração e consumo.</p>
        <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#FE7F32] transition-all" />
      </div>

      {/* Card 2: Valorização Imobiliária */}
      <div className="group bg-[#FE7F32] p-10 rounded-[40px] text-[#12111F] flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform duration-500 min-h-[300px] shadow-2xl">
        <div className="flex justify-between items-start">
          <Building2 size={32} />
          <ArrowUpRight size={32} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
        <div className="space-y-2 pt-16">
          <span className="text-5xl font-black tracking-tighter">+10%</span>
          <h4 className="text-xl font-bold uppercase leading-tight">Valorização <br /> do Imóvel</h4>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer id="contato" className="py-16 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-[#FE7F32] flex items-center justify-center rounded-sm">
            <Zap size={14} fill="white" className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Aura</span>
        </div>
        <p className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.4em]">
          Aura Sistemas • 2026 • Tecnologia Integrada
        </p>
      </footer>
    </div>
  );
}