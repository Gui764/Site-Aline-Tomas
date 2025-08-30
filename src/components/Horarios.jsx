// src/components/Horarios.jsx
import React from "react";

function Horarios() {
  const schedule = [
    { day: "Domingo", hours: "Fechado", open: false },
    { day: "Segunda-feira", hours: "Fechado", open: false },
    { day: "Terça-feira", hours: "Fechado", open: false },
    { day: "Quarta-feira", hours: "18:00 – 21:00", open: true },
    { day: "Quinta-feira", hours: "18:00 – 21:00", open: true },
    { day: "Sexta-feira", hours: "18:00 – 21:00", open: true },
    { day: "Sábado", hours: "10:00 – 17:00", open: true },
  ];

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Horários de Atendimento
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {schedule.map((item, index) => (
                <li
                  key={item.day}
                  className={`flex justify-between items-center text-lg ${
                    index < schedule.length - 1
                      ? "border-b border-blue-200/50 pb-3"
                      : ""
                  }`}
                >
                  <span
                    className={`font-medium ${
                      item.open ? "text-gray-700" : "text-gray-500"
                    }`}
                  >
                    {item.day}
                  </span>
                  <span
                    className={`font-mono px-3 py-1 rounded-full text-base ${
                      item.open
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horarios;
