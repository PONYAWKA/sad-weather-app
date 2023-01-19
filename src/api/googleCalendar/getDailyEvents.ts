import { apiCalendar } from "@/api/googleCalendar/index";

export const getEventsApi = async () => {
  const today = new Date(new Date().setUTCHours(0, 0, 0, 0));
  const tomorrow = new Date(new Date(today).setDate(today.getDate() + 1));
  const data = await apiCalendar.listEvents({
    timeMin: today.toISOString(),
    timeMax: tomorrow.toISOString(),
    singleEvents: true,
    orderBy: "startTime",
  });
  return data;
};
