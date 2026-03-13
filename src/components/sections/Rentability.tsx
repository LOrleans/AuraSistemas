import { TrendingUp, Building2, ArrowUpRight } from 'lucide-react';
import tecnico from '../../assets/tecnico.png';

export default function Rentability() {
  return (
    <section id='rentabilidade' className="relative py-32 md:py-48 px-6 bg-[#0d0c16] overflow-hidden">
      
      {/* BACKGROUND COM OVERLAY MELHORADO */}
      <div className="absolute inset-0 z-0">
        <img 
          src={tecnico}
          alt="Instalação Solar Aura" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        {/* Gradiente mais denso na esquerda para dar leitura ao texto branco */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c16] via-[#0d0c16]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* LADO ESQUERDO: TEXTO E ROI */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.5em] block">Retorno de Investimento </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tighter uppercase text-white">
							Infraestrutura <br />
							<span className="text-[#FE7F32] font-medium block mt-2">
								Rentável
							</span>
						</h2>
            <p className="max-w-xl text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              O sol é o seu maior ativo financeiro. Nossos projetos são desenhados para pagar o próprio investimento em tempo recorde, transformando um gasto fixo em patrimônio líquido.
            </p>
          </div>

          {/* INDICADORES DE TEMPO */}
          <div className="pt-10 border-t border-white/10 flex flex-wrap gap-12">
            <div className="space-y-1">
              <span className="block text-5xl font-light text-white italic tracking-tighter">04 Anos</span>
              <p className="text-[10px] text-[#FE7F32] uppercase font-bold tracking-[0.2em]">Tempo médio de Payback</p>
            </div>
            <div className="space-y-1">
              <span className="block text-5xl font-light text-white italic tracking-tighter">+25 Anos</span>
              <p className="text-[10px] text-[#FE7F32] uppercase font-bold tracking-[0.2em]">Vida útil garantida</p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: CARDS DE DESTAQUE */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          
          {/* Card 1: Eficiência */}
          <div className="group bg-[#12111F]/90 backdrop-blur-xl p-8 rounded-[35px] border border-white/5 hover:border-[#FE7F32]/40 transition-all duration-500 shadow-2xl space-y-6">
            <div className="flex justify-between items-center">
              <div className="p-3 bg-[#FE7F32]/10 text-[#FE7F32] rounded-xl">
                <TrendingUp size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/5 px-3 py-1 rounded-full">Eficiência</span>
            </div>
            <div>
              <h3 className="text-6xl font-black tracking-tighter text-white mb-2">95%</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-white/90">Redução na Conta de Luz</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Proteja-se contra os aumentos tarifários e gere sua própria energia limpa com gestão inteligente.
            </p>
          </div>

          {/* Card 2: Valorização (O Card Laranja) */}
          <div className="group bg-[#FE7F32] p-8 rounded-[35px] text-[#12111F] flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 min-h-[220px] shadow-[0_20px_50px_rgba(254,127,50,0.3)]">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-black/10 rounded-xl">
                <Building2 size={24} />
              </div>
              <ArrowUpRight size={28} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="space-y-1">
              <span className="text-6xl font-black tracking-tighter">+10%</span>
              <h4 className="text-lg font-bold uppercase leading-none tracking-tighter">Valorização Imobiliária</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}