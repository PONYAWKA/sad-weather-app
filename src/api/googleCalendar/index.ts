import ApiCalendar from "react-google-calendar-api";

export const config = {
  clientId:
    "300411907511-du2hek4p6nqocbf56mio12ocsbhidepd.apps.googleusercontent.com",
  apiKey: "AIzaSyBq_bMnpsEBN6Ap8ooVx9e7pOwj9AeBbuQ",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

export const apiCalendar = new ApiCalendar(config);
