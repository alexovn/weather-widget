import { ref } from 'vue';

export default function useGeolocation () {
  const coords = ref({lat: 0, lon: 0});
  const error = ref(null);

  const isSupported = 'navigator' in window && 'geolocation' in navigator;

  if(isSupported) {
    navigator.geolocation.getCurrentPosition(pos => {
      coords.value = pos.coords;
    }, err => {
      error.value = 'Unable to retrieve your location';
      console.error(err.message);
    });
  } else {
    error.value = 'Geolocation is not supproted by your broswer';
  }

  return {
    coords,
    error
  }
}