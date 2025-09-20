import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import {
  Heart,
  Users,
  Brain,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/PsicologiaSfundo.png"
                alt="Logo de Aline Tomas"
                className="w-32 h-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Aline Tomas</h1>
                <p className="text-sm text-gray-600">Psicóloga</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero_background.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center gap-4">
            <section className="h-screen flex flex-col items-center pb-20">
              <div className="text-center pt-40"></div>
              <a
                href="#contato"
                onClick={() => scrollToSection("contato")}
                className="mt-auto bg-[oklch(0.228_0.043_258.42)] hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
              </a>
            </section>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Psicoterapia especializada para adolescentes, adultos, casais e
                famílias
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Sobre Mim
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Olá! Sou a Aline Tomas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Psicóloga</strong> com <strong>CRP: 06/120927</strong>
                  , formada há 11 anos e com 10 anos de vivência no mundo do
                  trabalho em psicologia social.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Minha experiência inclui atendimentos individuais e em grupos,
                  avaliando os problemas da sociedade nos eixos de saúde pública
                  e políticas sociais. Tenho experiência em acompanhamentos em
                  casos de violência doméstica, álcool e droga, orientação sobre
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
                <div className=" rounded-2xl p-8 flex justify-center">
                  <div className="text-center">
                    <img
                      src="/Foto Aline Tomas.png"
                      alt="Foto Aline Tomas"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão,Visão,Valores*/}
      <section
        id="Missão"
        class="py-20 bg-[oklch(0.228_0.043_258.42)] text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Missão, Visão, Valores
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
              <p className="text-xl font-bold text-white">
                Atendimento presencial e online
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Missão
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Oferecer um espaço de acolhimento e escuta especializada,
                    onde indivíduos, casais e famílias encontram apoio para
                    florescer, superar desafios e construir relações mais
                    autênticas e saudáveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Visão
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ser uma referência em cuidado e transformação humana,
                    contribuindo para uma sociedade com pessoas mais
                    resilientes, conectadas e emocionalmente saudáveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Valores
                  </h3>
                  <p className="text-gray-600 mb-4">
                    • Acolhimento Um espaço seguro, empático e livre de
                    julgamentos, onde sua história é ouvida e respeitada.
                    <br />
                    • Ética e Respeito Compromisso absoluto com a
                    confidencialidade, a integridade e a sua autonomia em todo o
                    processo.
                    <br />
                    • Transformação Dedicação total ao seu crescimento, buscando
                    um aprimoramento contínuo para facilitar suas conquistas e
                    superações.
                    <br />
                    • Humanização Um olhar para o ser humano em sua totalidade,
                    valorizando suas experiências, seu contexto e sua
                    singularidade.
                    <br />
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
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
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Terapia Individual
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Atendimento para adolescentes e adultos com foco no
                    crescimento pessoal e bem-estar emocional.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ansiedade e depressão</li>
                    <li>• Autoestima e autoconfiança</li>
                    <li>• Gestão de emoções</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Terapia de Casal
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Especialização em Terapia Sistêmica para fortalecer
                    relacionamentos e resolver conflitos.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Comunicação efetiva</li>
                    <li>• Resolução de conflitos</li>
                    <li>• Fortalecimento do vínculo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[oklch(0.228_0.043_258.42)] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Terapia Familiar
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Abordagem sistêmica para melhorar a dinâmica familiar e
                    promover harmonia no lar.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dinâmica familiar</li>
                    <li>• Orientação parental</li>
                    <li>• Mediação de conflitos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Abordagem Terapêutica
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-bg-[oklch(0.228_0.043_258.42)] mb-3">
                    Terapia Sistêmica
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Especializada em Intervenção e Práticas Sistêmica, trabalho
                    com uma abordagem que considera o indivíduo dentro de seus
                    contextos relacionais, familiares e sociais.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-bg-[oklch(0.228_0.043_258.42)] mb-3">
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

      {/* Contato */}
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
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Localização
                    </h3>
                    <p className="text-gray-600">
                      Rua Heitor Alves de Amorim, 31
                    </p>
                    <p className="text-gray-600">Campo Limpo - São Paulo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Telefone
                    </h3>
                    <p className="text-gray-600">(11) 95206-4305</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">alinetomas63@yahoo.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Modalidades
                    </h3>
                    <p className="text-gray-600">
                      Atendimento presencial e online
                    </p>
                    <p className="text-gray-600">Horários flexíveis</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Agende sua Consulta
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Whatsapp
                    </label>
                  </div>

                  {/* BOTÃO ALTERADO AQUI */}
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511952064305&text=Ol%C3%A1%2C+Aline%21+Encontrei+seu+contato+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+as+consultas.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enviar mensagem no WhatsApp"
                    className="w-25 h-25 bg-whatsapp-green hover:bg-green-700 rounded-full flex items-center justify-center transition-transform transform hover:scale-100 mx-auto"
                  >
                    <img
                      src="/WhatsApp_Logo.png"
                      alt="Ícone do WhatsApp"
                      className="w-20 h-20"
                    />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-20 h-20 bg-[oklch(0.228_0.043_258.42)] rounded-full flex items-center justify-center">
                <img
                  src="/PsicologiaSfundo.png"
                  alt="Logo de Aline Tomas"
                  className="w-auto h-auto"
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
              Transformando vidas através do cuidado e acolhimento em
              psicoterapia
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                © 2024 Aline Tomas - Psicóloga. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
