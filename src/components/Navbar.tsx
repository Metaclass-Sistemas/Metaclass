import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(prev => prev === name ? null : name)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950 backdrop-blur-lg border-b border-slate-800 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Esquerda */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center py-2">
              <img
                src="/1.png"
                alt="Metaclass Logo"
                className="h-28 w-auto"
              />
            </a>
          </div>

          {/* Links - Centro */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {/* Produtos Dropdown */}
            <div className="relative group">
              <button className="text-white/90 hover:text-brand-blue transition-colors font-medium flex items-center gap-1 py-2">
                Produtos
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden py-1">
                  <a
                    href="https://beautygest.metaclass.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-800/50 transition-all duration-150 group/item"
                  >
                    <div>
                      <div className="text-sm text-white/90 group-hover/item:text-brand-blue transition-colors">BeautyGest</div>
                      <div className="text-[10px] text-gray-500 group-hover/item:text-brand-blue/70 transition-colors">by Metaclass</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-brand-blue transition-colors" />
                  </a>
                  <a
                    href="https://clinicnest.metaclass.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-800/50 transition-all duration-150 group/item"
                  >
                    <div>
                      <div className="text-sm text-white/90 group-hover/item:text-brand-blue transition-colors">ClinicNest</div>
                      <div className="text-[10px] text-gray-500 group-hover/item:text-brand-blue/70 transition-colors">by Metaclass</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-brand-blue transition-colors" />
                  </a>
                  <a
                    href="/produtos"
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-brand-blue hover:bg-slate-800/50 transition-all duration-150"
                  >
                    Ver portfólio
                  </a>
                </div>
              </div>
            </div>

            <a href="/servicos" className="text-white/90 hover:text-brand-blue transition-colors font-medium">
              Serviços
            </a>

            {/* Sobre Dropdown */}
            <div className="relative group">
              <button className="text-white/90 hover:text-brand-blue transition-colors font-medium flex items-center gap-1 py-2">
                Sobre
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden py-1">
                  <a
                    href="/quem-somos"
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-brand-blue hover:bg-slate-800/50 transition-all duration-150"
                  >
                    Quem somos
                  </a>
                  <a
                    href="/cases"
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-brand-blue hover:bg-slate-800/50 transition-all duration-150"
                  >
                    Cases de sucesso
                  </a>
                  <a
                    href="/trabalhe-conosco"
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-brand-blue hover:bg-slate-800/50 transition-all duration-150"
                  >
                    Trabalhe conosco
                  </a>
                </div>
              </div>
            </div>

            <a href="/contato" className="text-white/90 hover:text-brand-blue transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Botão CTA - Direita */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a
              href="/contato"
              className="px-4 py-2 rounded-full border border-slate-700 text-white/90 hover:border-brand-blue hover:text-brand-blue transition-all duration-300 font-semibold text-sm"
            >
              Falar com especialista
            </a>

            <div className="relative group">
              <button className="px-4 py-2 rounded-full bg-white text-slate-950 hover:bg-white/90 transition-colors font-semibold text-sm flex items-center gap-2">
                Sou cliente
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden py-1">
                  <a
                    href="https://beautygest.metaclass.com.br/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-800/50 transition-all duration-150 group/item"
                  >
                    <div>
                      <div className="text-sm text-white/90 group-hover/item:text-brand-blue transition-colors">BeautyGest</div>
                      <div className="text-[10px] text-gray-500 group-hover/item:text-brand-blue/70 transition-colors">by Metaclass</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-brand-blue transition-colors" />
                  </a>
                  <a
                    href="https://clinicnest.metaclass.com.br/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-800/50 transition-all duration-150 group/item"
                  >
                    <div>
                      <div className="text-sm text-white/90 group-hover/item:text-brand-blue transition-colors">ClinicNest</div>
                      <div className="text-[10px] text-gray-500 group-hover/item:text-brand-blue/70 transition-colors">by Metaclass</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-brand-blue transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => { setIsOpen(!isOpen); if (isOpen) setOpenSubmenu(null) }}
              className="text-white hover:text-brand-blue transition-colors p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Produtos - submenu colapsável */}
            <div className="border-b border-slate-800 pb-1 mb-1">
              <button
                onClick={() => toggleSubmenu('produtos')}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white/90 hover:text-brand-blue transition-colors"
              >
                Produtos
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === 'produtos' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openSubmenu === 'produtos' ? 'max-h-60' : 'max-h-0'}`}>
                <a
                  href="https://beautygest.metaclass.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-2 hover:text-brand-blue transition-colors"
                >
                  <div className="text-sm text-white/90">BeautyGest</div>
                  <div className="text-[10px] text-gray-500">by Metaclass</div>
                </a>
                <a
                  href="https://clinicnest.metaclass.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-2 hover:text-brand-blue transition-colors"
                >
                  <div className="text-sm text-white/90">ClinicNest</div>
                  <div className="text-[10px] text-gray-500">by Metaclass</div>
                </a>
                <a
                  href="/produtos"
                  className="block px-6 py-2 text-sm text-white/90 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Ver portfólio
                </a>
              </div>
            </div>

            <a
              href="/servicos"
              className="block px-3 py-2 text-sm text-white/90 hover:text-brand-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>

            {/* Sobre - submenu colapsável */}
            <div className="border-b border-slate-800 pb-1 mb-1">
              <button
                onClick={() => toggleSubmenu('sobre')}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white/90 hover:text-brand-blue transition-colors"
              >
                Sobre
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === 'sobre' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openSubmenu === 'sobre' ? 'max-h-40' : 'max-h-0'}`}>
                <a
                  href="/quem-somos"
                  className="block px-6 py-2 text-sm text-white/90 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Quem somos
                </a>
                <a
                  href="/cases"
                  className="block px-6 py-2 text-sm text-white/90 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cases de sucesso
                </a>
                <a
                  href="/trabalhe-conosco"
                  className="block px-6 py-2 text-sm text-white/90 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Trabalhe conosco
                </a>
              </div>
            </div>

            <a
              href="/contato"
              className="block px-3 py-2 text-sm text-white/90 hover:text-brand-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>

            {/* Sou cliente - submenu colapsável */}
            <div className="border-b border-slate-800 pb-1 mb-1">
              <button
                onClick={() => toggleSubmenu('cliente')}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white/90 hover:text-brand-blue transition-colors"
              >
                Sou cliente
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === 'cliente' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openSubmenu === 'cliente' ? 'max-h-40' : 'max-h-0'}`}>
                <a
                  href="https://beautygest.metaclass.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-2 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white/90">BeautyGest</div>
                  <div className="text-[10px] text-gray-500">by Metaclass</div>
                </a>
                <a
                  href="https://clinicnest.metaclass.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-2 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white/90">ClinicNest</div>
                  <div className="text-[10px] text-gray-500">by Metaclass</div>
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="/contato"
                className="block w-full px-3 py-2.5 rounded-full border border-slate-700 text-white/90 hover:border-brand-blue hover:text-brand-blue transition-all duration-300 font-semibold text-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
