import { Zap, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-[#0d0c16] border-t border-white/5 overflow-hidden">
      {/* Brilho sutil de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FE7F32]/50 to-transparent shadow-[0_0_50px_rgba(254,127,50,0.3)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: BRANDING */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FE7F32] flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(254,127,50,0.3)]">
                <Zap size={18} fill="white" className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-white">Aura</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
              Engenharia de alta performance para quem busca liberdade energética e valorização patrimonial.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/aurasistemas" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-[#FE7F32] hover:bg-[#FE7F32]/10 transition-all border border-white/5">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: CONTATO SÓCIO 1 */}
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FE7F32]">Comercial</span>
            <div className="space-y-3">
              <p className="text-white font-bold uppercase text-xs tracking-widest">Octávio Donner</p>
              <a href="https://wa.me/5584999999999" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-[#FE7F32]" /> (84) 9.xxxx-xxxx
              </a>
              <a href="mailto:donner@aurasistemas.com" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                <Mail size={14} className="text-[#FE7F32]" /> donner@aurasistemas.com
              </a>
            </div>
          </div>

          {/* COLUNA 3: CONTATO SÓCIO 2 */}
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FE7F32]">Operacional</span>
            <div className="space-y-3">
              <p className="text-white font-bold uppercase text-xs tracking-widest">Davi Cruz</p>
              <a href="https://wa.me/5584988888888" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-[#FE7F32]" /> (84) 9.xxxx-xxxx
              </a>
              <a href="mailto:davi@aurasistemas.com" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm">
                <Mail size={14} className="text-[#FE7F32]" /> davi@aurasistemas.com
              </a>
            </div>
          </div>

          {/* COLUNA 4: LOCALIZAÇÃO */}
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FE7F32]">Sede</span>
            <div className="flex items-start gap-3 text-gray-500 text-sm">
              <MapPin size={16} className="text-[#FE7F32] flex-shrink-0 mt-1" />
              <p>Rio Grande do Norte, Brasil<br />Atendimento em todo o estado.</p>
            </div>
          </div>

        </div>

        {/* CRÉDITOS FINAIS */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <p className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em]">
                © 2026 Aura Energia Solar • Todos os direitos reservados
                </p>
                <span className="hidden md:block text-gray-800">|</span>
                <p className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em]">
                Desenvolvido por{" "}
                <a 
                    href="https://seulink.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#FE7F32] transition-colors duration-300"
                >
                    Lucas Orleans
                </a>
                </p>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="text-gray-700 text-[10px] font-bold uppercase tracking-widest hover:text-[#FE7F32] transition-colors">Termos de Uso</a>
                <a href="#" className="text-gray-700 text-[10px] font-bold uppercase tracking-widest hover:text-[#FE7F32] transition-colors">Privacidade</a>
            </div>
        </div>
      </div>
    </footer>
  );
}