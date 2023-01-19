export const getCurrentTime = () =>
  new Date().toLocaleTimeString([], { timeStyle: "short" });
