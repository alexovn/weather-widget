import { ref } from 'vue';

const error = ref(null);

const geocoding = async (cityName) => {
  const API_KEY = 'a9f1b3e7ce71f6d73a6bdd1275776d61';
  error.value = null;

  try {

    const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`);

    if(!resp.ok) {
      throw new Error('Could not fetch the data...');
    }

    const data = await resp.json();

    error.value = null;
    return data;

  } catch(err) {
    error.value = 'Could not fetch the data...';
    console.error(err);
  }
};

const useGeocoding = () => {
  return {
    geocoding,
    error
  }
};

export default useGeocoding;