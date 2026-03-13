import { Menu } from "lucide-react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      {/* NAVBAR ATUALIZADA */}
      <nav className="fixed top-6 w-full z-50 px-6">
        <div className="max-w-7xl mx-auto bg-[#12111F]/80 backdrop-blur-lg border border-white/5 h-20 px-8 rounded-[30px] flex items-center justify-between shadow-2xl">
          {/* Logo + Título como Imagem Única */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Aura - Energia, Automação e Segurança"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Menu Central (Desktop) */}
          <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            <a
              href="#sobre"
              className="hover:text-[#FE7F32] transition-colors relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#servicos"
              className="hover:text-[#FE7F32] transition-colors relative group"
            >
              Ecossistema
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#socios"
              className="hover:text-[#FE7F32] transition-colors relative group"
            >
              Sócios
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contato"
              className="hover:text-[#FE7F32] transition-colors relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* CTA Final */}
          <div className="flex items-center gap-4">
            <button className="bg-[#FE7F32] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#e66e28] hover:scale-105 transition-all shadow-lg shadow-[#FE7F32]/20">
              Agendar Visita
            </button>

            {/* Menu Mobile Icon (Opcional) */}
            <div className="md:hidden p-2 text-white">
              <Menu size={24} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
