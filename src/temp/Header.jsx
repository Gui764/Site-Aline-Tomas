// src/components/Header.jsx
import React from "react";

// Os dados dos links do menu, fáceis de editar
const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre Mim" },
  { id: "missao", label: "Missão" },
  { id: "servicos", label: "Serviços" },
  { id: "horarios", label: "Horários" },
  { id: "contato", label: "Contato" },
];

function Header({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  logoPrincipal,
}) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={logoPrincipal}
              alt="Logo de Aline Tomas"
              className="w-12 h-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Aline Tomas</h1>
              <p className="text-sm text-gray-600">Psicóloga</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão Hambúrguer */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
