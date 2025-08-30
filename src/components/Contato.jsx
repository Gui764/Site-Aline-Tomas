// src/components/Contato.jsx
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GoogleCalendarButton from "./ui/GoogleCalendarButton.jsx";

function Contato({ logoWhatsapp, logoInstagram }) {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Localização",
      lines: ["Rua Heitor Alves de Amorim, 31", "Campo Limpo - São Paulo"],
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Telefone",
      lines: ["(11) 95206-4305"],
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      lines: ["alinetomas63@yahoo.com.br"],
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Modalidades",
      lines: ["Atendimento presencial e online", "Horários flexíveis"],
    },
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Estou aqui para ajudar você em sua jornada de bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h3>
                    {info.lines.map((line) => (
                      <p key={line} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Agende sua Consulta
              </h3>

              <div className="w-full">
                <p className="text-gray-600 mb-6">
                  Prefere um contato rápido para tirar dúvidas e agendar?
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511952064305&text=Ol%C3%A1%2C+Aline%21+Encontrei+seu+contato+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+consultas.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs flex items-center justify-center gap-3 bg-whatsapp-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 mx-auto"
                >
                  <img
                    src={logoWhatsapp}
                    alt="Ícone do WhatsApp"
                    className="w-6 h-6"
                  />
                  <span>Agendar via WhatsApp</span>
                </a>

                <div className="flex items-center w-full max-w-xs my-6 mx-auto">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-500 text-sm">
                    OU
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <p className="text-gray-600 mb-6">
                  Escolha um horário diretamente na minha agenda:
                </p>
                <GoogleCalendarButton />
              </div>

              <div className="w-full border-t border-gray-300 mt-8 pt-6">
                <p className="text-gray-600 mb-4">Siga-me no Instagram:</p>
                <a
                  href="https://www.instagram.com/alinetomas63?utm_source=ig_web_button_share_sheet&igsh=emFpN2l3MmMyeTlo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Acessar o Instagram"
                  className="w-20 h-20 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gradient-to-tr hover:from-[#c32aa3] hover:via-[#f77737] hover:to-[#ffdd49] mx-auto"
                >
                  <img
                    src={logoInstagram}
                    alt="Ícone do Instagram"
                    className="w-12 h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
