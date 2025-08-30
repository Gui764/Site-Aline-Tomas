// src/components/Hero.jsx
import React from "react";

function Hero({ scrollToSection, heroBackground, heroBackgroundMob }) {
  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>

      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-30 md:hidden"
        style={{ backgroundImage: `url(${heroBackgroundMob})` }}
      ></div>

      <div
        className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-20">
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contato");
          }}
          className="bg-[oklch(0.228_0.043_258.42)] hover:bg-opacity-80 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Agendar Consulta
        </a>
      </div>
    </section>
  );
}

export default Hero;
