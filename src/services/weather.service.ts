import axios from "axios";

type Geo = { latitude: number; longitude: number; name: string; country: string } | null;

async function geocodeCity(city: string): Promise<Geo> {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=1&language=es&format=json`;

  const { data } = await axios.get(url);

  if (!data.results || data.results.length === 0) return null;

  const { latitude, longitude, name, country } = data.results[0];
  return { latitude, longitude, name, country };
}

function formatDateUTC(dateStr: string) {
  const d = new Date(dateStr);
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export async function getWeatherFor(city: string, dateIso: string) {
  const geo = await geocodeCity(city);
  if (!geo) return { found: false, message: "Ubicación no encontrada" };

  const date = formatDateUTC(dateIso);
  //aqui falto una letra del ejemplo, por eso el error en postman
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&start_date=${date}&end_date=${date}`;

  const { data } = await axios.get(url);

  if (!data.daily || !data.daily.time || data.daily.time.length === 0) {
    return { found: false, message: "Sin datos de clima" };
  }

  return {
    found: true,
    location: `${geo.name}, ${geo.country}`,
    date: data.daily.time[0],
    weathercode: data.daily.weathercode[0],
    tmax: data.daily.temperature_2m_max[0],
    tmin: data.daily.temperature_2m_min[0],
    precipitation: data.daily.precipitation_sum[0],
  };
}