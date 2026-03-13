import { Send, MessageSquare, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-32 px-6 bg-[#0d0c16] overflow-hidden">
      
      {/* EFEITO DE FUNDO: VÓRTICE DE ENERGIA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FE7F32]/10 rounded-full blur-[150px] animate-pulse z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FE7F32]/5 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: COPY IMPACTANTE */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em] block">Inicie sua Revolução</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                Vamos <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #FE7F32' }}>Conectar</span> <br />
                Sua Energia.
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Saia da dependência das tarifas convencionais. Deixe seu contato e nossa engenharia desenhará seu novo ecossistema.
              </p>
            </div>

            {/* INFO DE CONTATO RÁPIDO */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FE7F32] group-hover:bg-[#FE7F32] group-hover:text-[#12111F] transition-all duration-500 shadow-xl">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">WhatsApp</p>
                  <p className="text-white font-medium">(84) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FE7F32] group-hover:bg-[#FE7F32] group-hover:text-[#12111F] transition-all duration-500 shadow-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">E-mail</p>
                  <p className="text-white font-medium">contato@aurasistemas.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO OUSADO */}
          <div className="relative">
            <div className="bg-[#12111F]/60 backdrop-blur-2xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-3xl relative overflow-hidden">
              {/* Brilho interno do card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FE7F32]/20 rounded-full blur-3xl" />
              
              <form className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-2">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Lucas Orleans"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#FE7F32]/50 focus:bg-white/10 transition-all text-white placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-2">WhatsApp / E-mail</label>
                  <input 
                    type="text" 
                    placeholder="Como prefere ser contatado?"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#FE7F32]/50 focus:bg-white/10 transition-all text-white placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-2">Mensagem (Opcional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Conte um pouco sobre sua necessidade..."
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#FE7F32]/50 focus:bg-white/10 transition-all text-white placeholder:text-gray-700 resize-none"
                  />
                </div>

                <button className="w-full bg-[#FE7F32] text-[#12111F] font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-0 hover:bg-white transition-all duration-500 group">
                  Solicitar Consultoria Grátis
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Decoração Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-[#0d0c16] border border-white/10 p-6 rounded-3xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <p className="text-[10px] font-bold uppercase tracking-tighter">Consultores Online agora</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}