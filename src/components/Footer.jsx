// src/components/Footer.jsx
import React from "react";

function Footer({ logoPrincipal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center">
              <img
                src={logoPrincipal}
                alt="Logo de Aline Tomas"
                className="w-10 h-auto"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Aline Tomas</h3>
              <p className="text-sm text-gray-300">
                Psicóloga - CRP: 06/120927
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Transformando vidas através do cuidado e acolhimento em psicoterapia
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Aline Tomas - Psicóloga. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
