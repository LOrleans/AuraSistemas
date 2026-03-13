import { ClipboardCheck, PencilRuler, HardHat, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Análise de Viabilidade',
    description: 'Estudo técnico de consumo e estrutura do telhado via satélite para o dimensionamento perfeito.',
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    title: 'Projeto de Engenharia',
    description: 'Nossos engenheiros desenham a solução ideal e cuidam de toda a burocracia com a concessionária.',
    icon: <PencilRuler className="w-6 h-6" />,
  },
  {
    title: 'Instalação Técnica',
    description: 'Equipe especializada realiza a montagem com equipamentos premium, garantindo segurança e performance.',
    icon: <HardHat className="w-6 h-6" />,
  },
  {
    title: 'Ativação e Suporte',
    description: 'Configuramos seu monitoramento mobile e garantimos que você comece a economizar imediatamente.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

export default function Steps() {
  return (
    <section className="relative py-32 px-6 bg-[#12111F] overflow-hidden">
      
      {/* EFEITOS DE FUNDO (ORBES LARANJAS) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FE7F32]/15 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FE7F32]/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em]">Sua Jornada Solar</span>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter">
            Como funciona a <span className="text-[#FE7F32] font-medium">Experiência Aura</span>
          </h2>
        </div>

        {/* CONTÊINER DA TIMELINE VERTICAL */}
        <div className="relative">
          {/* Linha Central (Vertical) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2 hidden md:block" />

          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-20 md:mb-0 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* NÚMERO GIGANTE VAZADO (Estilo Futurista) */}
              <div className={`absolute top-14 text-[180px] font-black leading-none text-transparent opacity-15 ${index % 2 !== 0 ? 'md:left-0 md:translate-x-12' : 'md:right-0 md:-translate-x-12'}`}
                   style={{ WebkitTextStroke: '2px white' }}>
                0{index + 1}
              </div>

              {/* BLOCO DE CONTEÚDO */}
              <div className="w-full md:w-1/2 p-6 md:p-12 z-20">
                <div className={`group bg-[#0d0c16]/80 backdrop-blur-sm p-10 rounded-[30px] border border-white/5 hover:border-[#FE7F32]/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl ${index % 2 !== 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} flex flex-col items-center text-center`}>
                  
                  {/* Ícone e Título */}
                  <div className="flex items-center gap-5 mb-6">
                    {index % 2 === 0 && (
                      <div className="p-4 bg-[#FE7F32]/10 text-[#FE7F32] rounded-2xl group-hover:bg-[#FE7F32] group-hover:text-white transition-all duration-500">
                        {step.icon}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    {index % 2 !== 0 && (
                      <div className="p-4 bg-[#FE7F32]/10 text-[#FE7F32] rounded-2xl group-hover:bg-[#FE7F32] group-hover:text-white transition-all duration-500">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  {/* Descrição */}
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[320px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* PONTO CENTRAL DA TIMELINE (Desktop) */}
              <div className="absolute left-1/2 top-1/2 w-8 h-8 rounded-full border-4 border-[#12111F] transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-30">
                <div className="w-4 h-4 bg-[#FE7F32] rounded-full shadow-[0_0_20px_rgba(254,127,50,0.8)]" />
              </div>
              
              {/* Espaçador para o layout em ziguezague (Desktop) */}
              <div className="w-full md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}