import { apiCalendar } from "@/api/googleCalendar/index";
import { IEventData, ImapElement } from "@/api/googleCalendar/interfaces";

export const getEventsApi = async (): Promise<IEventData> => {
  const today = new Date(new Date().setUTCHours(0, 0, 0, 0));
  const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));
  const data = await apiCalendar.listEvents({
    timeMin: today.toISOString(),
    timeMax: tomorrow.toISOString(),
    singleEvents: true,
    orderBy: "startTime",
  });
  const usefulData = [
    data.result.items?.map((e: ImapElement) => ({
      eventText: e.summary,
      startTime:
        e?.start?.dateTime?.split("T")[1].split("+")[0].slice(0, -3) ??
        "Whole Day",
    })),
  ];
  return [...usefulData][0];
};
