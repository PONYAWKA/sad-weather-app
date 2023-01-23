import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { apiCalendar, config } from "@/api/googleCalendar";
import {
  CalendarBodyContainer,
  CalendarContainer,
  CalendarDisplay,
  LogButton,
} from "@/components/Calendar/styled";
import { CityChanger } from "@/components/CityChanger";
import { Clock } from "@/components/Clock";
import { EventList } from "@/components/EventList";
import { useAppSelector } from "@/store";
import { setAuth } from "@/store/actions";
import { statusSelector } from "@/store/selectors";

export const Calendar = () => {
  const dispatch = useDispatch();
  const { isAuthorized } = useAppSelector(statusSelector);

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      window.gapi.auth2.init(config).then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        dispatch(setAuth(GoogleAuth.isSignedIn.get()));
      });
    };
  }, []);

  const handleAuthorize = () => {
    if (isAuthorized) apiCalendar.handleSignoutClick();
    else apiCalendar.handleAuthClick();
    dispatch(setAuth(!isAuthorized));
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
      <CityChanger />
    </CalendarBodyContainer>
  );
};
