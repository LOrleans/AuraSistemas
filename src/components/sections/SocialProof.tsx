import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Empresário",
    text: "A redução na conta foi imediata. O que mais me impressionou foi o acabamento da instalação e o suporte técnico da Aura.",
    stars: 5
  },
  {
    name: "Ana Júlia",
    role: "Residência Solar",
    text: "Fiquei receosa com a burocracia, mas eles resolveram tudo com a concessionária. Hoje produzo minha própria energia limpa.",
    stars: 5
  }
];

export default function SocialProof() {
  return (
    <section className="relative py-32 px-6 bg-[#12111F] overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FE7F32]/5 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <span className="text-[#FE7F32] font-bold text-xs uppercase tracking-[0.4em]">Prova Real</span>
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter">
            Projetos que <span className="text-[#FE7F32] font-medium">Geram Valor</span>
          </h2>
        </div>

        {/* BENTO GRID DE FOTOS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-20">
          <div className="md:col-span-8 h-[400px] rounded-[30px] overflow-hidden group relative border border-white/5">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070" alt="Instalação 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c16] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FE7F32] bg-[#FE7F32]/10 px-3 py-1 rounded-full">Residencial Premium</span>
            </div>
          </div>
          
          <div className="md:col-span-4 h-[400px] rounded-[30px] overflow-hidden group relative border border-white/5">
            <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058" alt="Instalação 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c16] via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* GRID DE DEPOIMENTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0d0c16] p-10 rounded-[40px] border border-white/5 relative group hover:border-[#FE7F32]/20 transition-all">
              <Quote className="absolute top-8 right-10 text-white/5 group-hover:text-[#FE7F32]/10 transition-colors" size={80} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={14} fill="#FE7F32" className="text-[#FE7F32]" />
                ))}
              </div>

              <p className="text-xl text-gray-300 italic mb-8 relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-[#FE7F32] to-[#ffaa75] rounded-full" />
                <div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-tighter">{t.name}</h4>
                  <p className="text-[#FE7F32] text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}