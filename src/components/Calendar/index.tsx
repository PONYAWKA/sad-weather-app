import { useEffect, useState } from "react";

import { apiCalendar, config } from "@/api/googleCalendar";
import {
  CalendarBodyContainer,
  CalendarContainer,
  CalendarDisplay,
  LogButton,
} from "@/components/Calendar/styled";
import { Clock } from "@/components/Clock";
import { EventList } from "@/components/EventList";

export const Calendar = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      window.gapi.auth2.init(config).then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        setIsAuthorized(GoogleAuth.isSignedIn.get());
      });
    };
  }, []);

  const handleAuthorize = () => {
    if (isAuthorized) apiCalendar.handleSignoutClick();
    else apiCalendar.handleAuthClick();
    setIsAuthorized((prev) => !prev);
  };

  const authText = isAuthorized ? "Выйти" : "Войти";
  return (
    <CalendarBodyContainer>
      <CalendarDisplay>
        <Clock />
        <CalendarContainer>
          <LogButton onClick={handleAuthorize}>{authText}</LogButton>
          <EventList isAuthorized={isAuthorized} />
        </CalendarContainer>
      </CalendarDisplay>
    </CalendarBodyContainer>
  );
};
