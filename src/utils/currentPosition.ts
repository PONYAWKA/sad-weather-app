export const getPosition = () => {
  let date;
  navigator.geolocation.getCurrentPosition((data) => {
    date = { lat: data.coords.latitude, lon: data.coords.longitude };
  });
  return date ?? { lat: 1, lon: 1 };
};
