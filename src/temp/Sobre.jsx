// src/components/Sobre.jsx
import React from "react";

function Sobre({ fotoAline }) {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Psicoterapia especializada para adolescentes, adultos, casais e
              famílias
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Olá! Sou a Aline Tomas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Psicóloga</strong> com <strong>CRP: 06/120927</strong>,
                formada há 11 anos e com 10 anos de vivência no mundo do
                trabalho em psicologia social.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Minha experiência inclui atendimentos individuais e em grupos,
                avaliando os problemas da sociedade nos eixos de saúde pública e
                políticas sociais. Tenho experiência em acompanhamentos em casos
                de violência doméstica, álcool e droga, orientação sobre
                direitos da criança e adolescentes em casa de acolhimento,
                atendimentos de abuso infantil, pessoas em situação de rua,
                acolhimento e orientação para grupos de família.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Atuo no consultório clínico há 6 anos como{" "}
                <strong>Terapeuta de Família e Casal</strong>, atendimentos de
                adolescente e adulto, buscando sempre aprimorar meus
                conhecimentos ofertando um melhor atendimento.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Especialização:
                </h4>
                <p className="text-gray-700">
                  Intervenção e Práticas Sistêmica - Terapia Família e Casal
                </p>
                <p className="text-gray-700 mt-2">
                  Estudante de Neuropsicologia
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={fotoAline}
                alt="Foto de Aline Tomas"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
