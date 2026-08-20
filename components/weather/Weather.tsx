export default async function Weather() {
  const lat = 34.0837,
    lon = 74.7973;
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
  );

  const weather = await data.json();

  const currentTemp = weather.current.temperature_2m;

  return <span>{currentTemp} C</span>;
}
