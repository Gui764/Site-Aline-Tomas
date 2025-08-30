// src/components/ui/GoogleCalendarButton.jsx
import React, { useEffect, useRef } from "react";

function GoogleCalendarButton() {
  const containerRef = useRef(null);
  // 1. Criamos a nossa "flag" para controlar a execução
  const hasInitialized = useRef(false);

  useEffect(() => {
    // 2. Verificamos se a flag é 'false' (ou seja, se o script ainda não rodou)
    if (hasInitialized.current === false) {
      if (window.calendar && containerRef.current) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0PDdWg4TsZkef4PXel7cOTli9mcRuG0i1LMCRDbOgIJmpfN_oOjjSND_lx6zypQuOOLZwg3ypT?gv=true",
          color: "#050a30",
          label: "Agendar sua consulta",
          target: containerRef.current,
        });

        // 3. ATUALIZAMOS A FLAG para 'true' depois de executar o script
        hasInitialized.current = true;
      }
    }
  }, []); // O array vazio garante que o efeito seja atrelado à montagem do componente

  return <div ref={containerRef}></div>;
}

export default GoogleCalendarButton;
