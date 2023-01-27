import { memo } from "react";
import { useDispatch } from "react-redux";

import { ImapElement, IProps } from "@/components/EventList/interfaces";
import {
  EventElementBody,
  EventElementText,
  EventElementTime,
  EventListBody,
  EventListContainer,
  LoadEventsButton,
} from "@/components/EventList/styled";
import { useAppSelector } from "@/store";
import { getEvents } from "@/store/actions";
import { IEventsReducer } from "@/store/reducers/interfaces";
import { eventSelector } from "@/store/selectors";

const EventListMemo = ({ isAuthorized }: IProps) => {
  const dispatch = useDispatch();

  const { events }: IEventsReducer = useAppSelector(eventSelector);

  const handleGetEvents = () => {
    dispatch(getEvents());
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
export const EventList = memo(EventListMemo);
