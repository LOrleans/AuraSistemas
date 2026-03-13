import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "O sistema funciona em dias nublados ou com chuva?",
    answer: "Sim! Embora a produção seja menor do que em dias ensolarados, os painéis solares modernos captam a radiação difusa através das nuvens. Você nunca fica sem energia, pois o sistema permanece conectado à rede elétrica."
  },
  {
    question: "Quanto tempo dura o sistema e qual a garantia?",
    answer: "Os painéis têm uma vida útil estimada em mais de 25 anos, com garantia de performance de fábrica. Os inversores costumam ter garantia de 5 a 10 anos, dependendo do modelo escolhido."
  },
  {
    question: "E se eu produzir mais energia do que eu consumo?",
    answer: "O excesso vira créditos energéticos na sua conta. Esses créditos podem ser usados em até 60 meses ou até mesmo para abater a conta de outro imóvel que esteja no seu nome (dentro da mesma área de concessão)."
  },
  {
    question: "Precisa de manutenção constante?",
    answer: "A manutenção é mínima. Basicamente, consiste na limpeza periódica dos painéis (geralmente feita pela própria chuva) e uma revisão técnica anual que a Aura pode realizar para garantir que tudo opere em 100%."
  },
  {
    question: "Qual o tempo médio de retorno do investimento (Payback)?",
    answer: "No Brasil, devido às excelentes tarifas e incidência solar, o payback médio varia entre 3 a 5 anos. Considerando que o sistema dura 25, você terá pelo menos 20 anos de energia praticamente gratuita."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-6 bg-[#0d0c16] overflow-hidden">
      
      {/* Efeito Laranja de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE7F32]/5 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#FE7F32]/10 text-[#FE7F32] rounded-full">
              <HelpCircle size={24} />
            </div>
          </div>
          <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em]">Dúvidas Frequentes</span>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter">
            Perguntas <span className="text-[#FE7F32] font-medium">Comuns</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group border border-white/5 rounded-[24px] transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'bg-[#12111F] border-[#FE7F32]/30 shadow-[0_0_40px_rgba(254,127,50,0.05)]' : 'bg-[#0d0c16] hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left outline-none"
              >
                <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-[#FE7F32]' : 'text-white/80'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#FE7F32] text-[#12111F] rotate-180' : 'bg-white/5 text-white/40'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-7 pb-7 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Sutil */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Ainda tem dúvidas?</p>
          <button className="bg-transparent border border-[#FE7F32] text-[#FE7F32] px-8 py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#FE7F32] hover:text-white transition-all duration-500">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
}