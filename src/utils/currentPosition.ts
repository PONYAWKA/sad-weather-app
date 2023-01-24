export const getPosition = () => {
  let date;
  navigator?.geolocation.getCurrentPosition((data) => {
    date = { lat: data.coords.latitude, lon: data.coords.longitude };
  });
  return date ?? { lat: 0, lon: 0 };
};
