// src/components/Servicos.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Heart, Users, Brain } from "lucide-react";

// Componente reutilizável para os cards de serviço
const ServiceCard = ({ icon, title, description, items }) => (
  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <CardContent className="p-8 text-center">
      <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-left text-gray-600 space-y-1 list-disc list-inside">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

function Servicos() {
  const servicesData = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Terapia Individual",
      description:
        "Atendimento para adolescentes e adultos com foco no crescimento pessoal e bem-estar emocional.",
      items: [
        "Ansiedade e depressão",
        "Autoestima e autoconfiança",
        "Gestão de emoções",
      ],
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Terapia de Casal",
      description:
        "Especialização em Terapia Sistêmica para fortalecer relacionamentos e resolver conflitos.",
      items: [
        "Comunicação efetiva",
        "Resolução de conflitos",
        "Fortalecimento do vínculo",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Terapia Familiar",
      description:
        "Abordagem sistêmica para melhorar a dinâmica familiar e promover harmonia no lar.",
      items: [
        "Dinâmica familiar",
        "Orientação parental",
        "Mediação de conflitos",
      ],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-blue-50 to-green-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meus Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Atendimento presencial e online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Abordagem Terapêutica
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[oklch(0.228_0.043_258.42)] mb-3">
                  Terapia Sistêmica
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Especializada em Intervenção e Práticas Sistêmica, trabalho
                  com uma abordagem que considera o indivíduo dentro de seus
                  contextos relacionais, familiares e sociais.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[oklch(0.228_0.043_258.42)] mb-3">
                  Experiência Diferenciada
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Com 10 anos de experiência em psicologia social, ofereço uma
                  perspectiva única que considera os aspectos sociais e
                  comunitários no processo terapêutico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
