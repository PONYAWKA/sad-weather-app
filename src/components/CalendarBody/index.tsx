import { useEffect, useState } from "react";

import { apiCalendar, config } from "@/api/googleCalendar";
import {
  CalendarBodyContainer,
  CalendarContainer,
  CalendarDisplay,
  LogButton,
} from "@/components/CalendarBody/styled";
import { Clock } from "@/components/Clock";

export const CalendarBody = () => {
  const [isAuthorized, setisAuthorized] = useState(false);

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      window.gapi.auth2.init(config).then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        setisAuthorized(GoogleAuth.isSignedIn.get());
      });
    };
  }, []);

  const handleAuthorize = () => {
    if (isAuthorized) apiCalendar.handleSignoutClick();
    else apiCalendar.handleAuthClick();
    setisAuthorized((prev) => !prev);
  };

  const authText = isAuthorized ? "Выйти" : "Войти";
  return (
    <CalendarBodyContainer>
      <CalendarDisplay>
        <Clock />
        <CalendarContainer>
          <LogButton onClick={handleAuthorize}>{authText}</LogButton>
        </CalendarContainer>
      </CalendarDisplay>
    </CalendarBodyContainer>
  );
};
