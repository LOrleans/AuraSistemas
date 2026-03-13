import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import Donner from '../../assets/Donner.jpeg';

const sociosData = [
  {
    nome: "Donner Octávio",
    cargo: "Sócio Diretor & Especialista em Vendas",
    experiencia: "+10 anos",
    especialidade: "Referência Nacional",
    descricao: "Com vasta experiência no desenvolvimento de soluções integradas, Donner lidera a visão estratégica da Aura em transformar serviços isolados em ecossistemas inteligentes e escaláveis.",
    imagem: Donner
  },
  {
    nome: "Davi Cruz",
    cargo: "Sócio de Operações & Infraestrutura",
    experiencia: "+8 anos",
    especialidade: "Eficiência Energética",
    descricao: "Especialista em implementação de infraestrutura de larga escala, focado em garantir que os sistemas de automação e energia operem com máxima performance e segurança.",
    imagem: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

export default function SociosSection() {
  const [index, setIndex] = useState(0);

  const proximoSocio = () => {
    setIndex((prev) => (prev === sociosData.length - 1 ? 0 : prev + 1));
  };

  const socioAnterior = () => {
    setIndex((prev) => (prev === 0 ? sociosData.length - 1 : prev - 1));
  };

  const socio = sociosData[index];

  return (
    <section id="socios" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-[#12111F] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl min-h-[650px] flex flex-col md:flex-row transition-all duration-500">
        
        {/* Lado Esquerdo: Informações (Dinâmico) */}
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="space-y-4">
            <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em]">Liderança & Visão</span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">
              Nossos <span className="text-[#FE7F32] font-medium">Sócios</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-md">
            <div className="space-y-1">
              <h3 className="text-3xl font-bold uppercase tracking-tight transition-all">{socio.nome}</h3>
              <p className="text-[#FE7F32] text-xs font-black uppercase tracking-widest">{socio.cargo}</p>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed min-h-[120px]">
              {socio.descricao}
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-2xl font-light text-white italic">{socio.experiencia}</span>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Experiência</p>
              </div>
              <div>
                <span className="block text-2xl font-light text-white italic">{socio.especialidade}</span>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Destaque</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Imagem com Navegação */}
        <div className="w-full md:w-2/5 min-h-[500px] relative overflow-hidden group">
          <img 
            key={socio.nome}
            src={socio.imagem} 
            alt={socio.nome} 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 animate-in zoom-in-105"
          />
          
          {/* Overlay de Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#12111F]/30" />

          {/* Botões de Navegação Lateral na Foto */}
          <div className="absolute inset-y-0 right-4 flex flex-col justify-center gap-4 z-20">
            <button 
              onClick={proximoSocio}
              className="p-4 bg-[#FE7F32] text-white rounded-full hover:bg-[#e66e28] transition-all shadow-xl hover:scale-110 active:scale-95"
              aria-label="Próximo Sócio"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
            <button 
              onClick={socioAnterior}
              className="p-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white/20 transition-all"
              aria-label="Sócio Anterior"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Indicador de página */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {sociosData.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 rounded-full ${index === i ? 'w-8 bg-[#FE7F32]' : 'w-2 bg-white/30'}`} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}