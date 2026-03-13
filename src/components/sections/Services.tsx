import { ArrowRight, BatteryCharging, LineChart, Sun } from "lucide-react";

export default function Services() {
    return (
      <section id="servicos" className="py-32 px-6 bg-[#0d0c16]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em]">Soluções em Energia</span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">Engenharia <span className="text-[#FE7F32] font-medium">Solar de Ponta</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Consultoria e Análise', 
                desc: 'Estudo técnico de viabilidade e análise de faturas para garantir o dimensionamento perfeito do seu sistema.',
                icon: <LineChart size={32} />,
                tag: 'Estudo'
              },
              { 
                title: 'Instalação Premium', 
                desc: 'Equipamentos de alta performance e equipe de engenharia própria para garantir segurança e longevidade.',
                icon: <Sun size={32} />,
                tag: 'Execução'
              },
              { 
                title: 'Monitoramento 24h', 
                desc: 'Acompanhe sua geração em tempo real via App e tenha suporte proativo para manutenção preventiva.',
                icon: <BatteryCharging size={32} />,
                tag: 'Suporte'
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-[#12111F] p-10 rounded-[40px] border border-white/5 hover:border-[#FE7F32]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl">
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
                    Entenda o processo <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-[40px] border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
            <p className="text-xs uppercase tracking-[0.2em] font-medium italic">
              "Foco em máxima eficiência energética e liberdade financeira para sua infraestrutura"
            </p>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-[#FE7F32] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    )
}