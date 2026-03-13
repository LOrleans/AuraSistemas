import { Menu } from "lucide-react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-6 w-full z-50 px-6">
        <div className="max-w-7xl mx-auto bg-[#12111F]/90 backdrop-blur-xl border border-white/10 h-20 px-8 rounded-[30px] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
          
          {/* LOGO COM DESTAQUE EXTRA */}
          <div className="flex items-center relative">
            {/* Glow atrás da logo */}
            <div className="absolute inset-0 bg-[#FE7F32]/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <a href="#" className="relative z-10 block group">
              <img
                src={Logo}
                alt="Aura Energia Solar"
                className="h-16 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(254,127,50,0.3)]"
                style={{ marginTop: "-5px" }} // Ajuste fino de posicionamento
              />
            </a>
          </div>

          {/* MENU CENTRAL ATUALIZADO (Desktop) */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            <a href="#" className="hover:text-[#FE7F32] transition-colors relative group">
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#servicos" className="hover:text-[#FE7F32] transition-colors relative group">
              Soluções
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#rentabilidade" className="hover:text-[#FE7F32] transition-colors relative group">
              Retorno 
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#socios" className="hover:text-[#FE7F32] transition-colors relative group">
              Sócios
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#faq" className="hover:text-[#FE7F32] transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* CTA FINAL */}
          <div className="flex items-center gap-4">
            <a 
              href="#contato" 
              className="hidden sm:block bg-[#FE7F32] text-[#12111F] px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_10px_20px_rgba(254,127,50,0.2)]"
            >
              Agendar Visita
            </a>

            {/* Menu Mobile Icon */}
            <div className="lg:hidden p-2 text-white hover:text-[#FE7F32] transition-colors cursor-pointer">
              <Menu size={28} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}