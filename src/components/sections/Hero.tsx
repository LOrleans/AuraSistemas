import React from "react";
import { ArrowRight } from "lucide-react";
import HeroImage from "../../assets/heroimage.png";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative h-screen w-full flex items-center overflow-hidden border-b border-white/5"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          className="w-full h-full object-cover opacity-60 grayscale-[20%]"
          alt="Infraestrutura Inteligente Aura"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12111F] via-[#12111F]/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#FE7F32]/30 bg-[#FE7F32]/5 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FE7F32]">
              Sistemas que conversam entre si
            </span>
          </div>

          <h1 className="text-6xl md:text-[8.5rem] font-light leading-[0.85] tracking-tighter uppercase">
            Energia que <br />
            <span className="text-[#FE7F32] font-medium">
              Integra e Protege
            </span>
          </h1>

          <p className="max-w-xl text-gray-200 text-lg md:text-xl font-light leading-relaxed">
            Desenvolvemos ecossistemas inteligentes que unem energia limpa,
            automação e segurança em infraestruturas completas e conectadas.
          </p>

          <div className="pt-4">
            {/* BOTÃO TRANSFORMADO EM LINK PARA REDIRECIONAMENTO */}
            <a 
              href="#contato"
              className="inline-flex items-center gap-3 bg-[#FE7F32] text-[#12111F] px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_15px_30px_rgba(254,127,50,0.2)]"
            >
              Solicitar Orçamento <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-10 animate-bounce opacity-30">
        <div className="w-px h-16 bg-white" />
      </div>
    </section>
  );
}