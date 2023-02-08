import { ref } from 'vue';

const error = ref(null);
const isLoading = ref(false);

const search = async (lat, lon) => {
  error.value = null;
  const API_KEY = 'a9f1b3e7ce71f6d73a6bdd1275776d61';

  try {
    isLoading.value = true;

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

    if(!resp.ok) {
      throw new Error('Could not fetch the data...');
    }

    const data = await resp.json();

    isLoading.value = false;
    
    return data;
    
  } catch(err) {
    isLoading.value = true;

    console.error(err);
    error.value = 'Could not feth the data...';
  }
};

const useSearch = () => {
  return {
    search,
    error,
    isLoading
  };
};

export default useSearch;