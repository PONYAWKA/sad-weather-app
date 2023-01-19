import { useState } from "react";

import { getEventsApi } from "@/api/googleCalendar/getDailyEvents";
import { ImapElement, IProps } from "@/components/EventList/interfaces";
import {
  EventElementBody,
  EventElementText,
  EventElementTime,
  EventListBody,
  EventListContainer,
  LoadEventsButton,
} from "@/components/EventList/styled";

export const EventList = ({ isAuthorized }: IProps) => {
  const [events, setEvents] = useState<any>([]);
  const handleGetEvents = async () => {
    setEvents((await getEventsApi())["0"]);
  };

  if (isAuthorized)
    return (
      <EventListBody>
        <LoadEventsButton onClick={handleGetEvents}>
          Get Events!
        </LoadEventsButton>
        <EventListContainer>
          {events?.map(({ eventText, startTime }: ImapElement) => (
            <EventElementBody key={eventText + startTime}>
              <EventElementTime>{startTime}</EventElementTime>
              <EventElementText>{eventText}</EventElementText>
            </EventElementBody>
          ))}
        </EventListContainer>
      </EventListBody>
    );
  return null;
};
