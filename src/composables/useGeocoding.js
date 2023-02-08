const geocoding = async (cityName, stateCode, countryCode, limit) => {
  const API_KEY = 'a9f1b3e7ce71f6d73a6bdd1275776d61';

  try {
    const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`);

    if(!resp.ok) {
      throw new Error('Could not fetch the data...');
    }

    const data = await resp.json();

    return data;

  } catch(err) {
    console.error(err);
  }
};

const useGeocoding = () => {
  return {
    geocoding
  }
};

export default useGeocoding;