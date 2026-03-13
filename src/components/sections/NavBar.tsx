import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo3.png"; 
import LogoTitulo from "../../assets/logo2.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Soluções", href: "#servicos" },
    { name: "Retorno", href: "#rentabilidade" },
    { name: "Sócios", href: "#socios" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="fixed top-6 w-full z-50 px-6">
        <div className="max-w-7xl mx-auto bg-[#12111F]/90 backdrop-blur-xl border border-white/10 h-20 px-8 rounded-[30px] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
          
          <div className="flex items-center relative group">
            <a href="#" className="flex items-center gap-4 relative z-10">
              {/* O Símbolo (Ícone) - Com destaque e extravasamento */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#FE7F32]/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <img
                  src={Logo}
                  alt="Símbolo Aura"
                  className="h-10 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(254,127,50,0.4)]"
                  style={{ marginTop: "-4px" }} 
                />
              </div>

              {/* O Texto (Logotipo) */}
              <img
                src={LogoTitulo}
                alt="Aura"
                className="h-6 md:h-8 w-auto object-contain transition-all duration-500 opacity-90 group-hover:opacity-100"
              />
            </a>
          </div>

          {/* MENU CENTRAL (Desktop) */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:text-[#FE7F32] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FE7F32] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA + MOBILE ICON */}
          <div className="flex items-center gap-4">
            <a 
              href="#contato" 
              className="hidden sm:block bg-[#FE7F32] text-[#12111F] px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_10px_20px_rgba(254,127,50,0.2)]"
            >
              Consultar Especialista
            </a>

            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:text-[#FE7F32] transition-colors cursor-pointer outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* DROPDOWN MENU (Mobile) */}
          <div 
            className={`absolute top-[90px] left-0 w-full bg-[#12111F]/95 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 flex flex-col gap-6 transition-all duration-500 lg:hidden ${
              isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 text-xs font-black uppercase tracking-[0.3em] hover:text-[#FE7F32] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-[#FE7F32] text-[#12111F] text-center py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest"
            >
              Agendar Visita
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}