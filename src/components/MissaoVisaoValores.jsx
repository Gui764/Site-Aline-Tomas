// src/components/MissaoVisaoValores.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Heart, Users, Brain } from "lucide-react";

// Componente reutilizável para os cards
const ValueCard = ({ icon, title, children }) => (
  <Card className="bg-white group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <CardContent className="p-8 text-center">
      <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="text-gray-600 text-left space-y-2">{children}</div>
    </CardContent>
  </Card>
);

function MissaoVisaoValores() {
  return (
    <section
      id="missao"
      className="py-20 bg-[oklch(0.228_0.043_258.42)] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Missão, Visão e Valores
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl font-bold text-white">
              Atendimento presencial e online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Brain className="w-8 h-8 text-white" />}
              title="Missão"
            >
              <p>
                Oferecer um espaço de acolhimento e escuta especializada, onde
                indivíduos, casais e famílias encontram apoio para florescer,
                superar desafios e construir relações mais autênticas e
                saudáveis.
              </p>
            </ValueCard>

            <ValueCard
              icon={<Heart className="w-8 h-8 text-white" />}
              title="Visão"
            >
              <p>
                Ser uma referência em cuidado e transformação humana,
                contribuindo para uma sociedade com pessoas mais resilientes,
                conectadas e emocionalmente saudáveis.
              </p>
            </ValueCard>

            <ValueCard
              icon={<Users className="w-8 h-8 text-white" />}
              title="Valores"
            >
              <ul className="list-disc list-inside">
                <li>
                  <strong>Acolhimento:</strong> Um espaço seguro, empático e
                  livre de julgamentos.
                </li>
                <li>
                  <strong>Ética e Respeito:</strong> Compromisso absoluto com a
                  confidencialidade e sua autonomia.
                </li>
                <li>
                  <strong>Transformação:</strong> Dedicação total ao seu
                  crescimento e superações.
                </li>
                <li>
                  <strong>Humanização:</strong> Um olhar para o ser humano em
                  sua totalidade e singularidade.
                </li>
              </ul>
            </ValueCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissaoVisaoValores;
