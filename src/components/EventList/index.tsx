import { useState } from "react";

import { getEventsApi } from "@/api/googleCalendar/getDailyEvents";
import { IProps } from "@/components/EventList/interfaces";
import { EventListBody } from "@/components/EventList/styled";

export const EventList = ({ isAuthorized }: IProps) => {
  const [events, setEvents] = useState();
  const handleGetEvents = async () => {
    setEvents(await getEventsApi());
  };

  return <EventListBody>
    <LoadEventsButton></LoadEventsButton>
  </EventListBody>;
};
