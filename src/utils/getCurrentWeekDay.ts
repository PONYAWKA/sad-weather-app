export const getCurrentWeekDay = (date: string) => {
  const data = new Date(date);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[data.getDay()];
};
