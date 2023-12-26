import axios from 'axios'


export const getWeather = async (city) => {
    console.log(import.meta.env.VITE_API_KEY)
    try {
      const response = await axios.get(`http://api.weatherstack.com/current`, {
        params: {
            access_key: import.meta.env.VITE_API_KEY,
            query: city
        }
    });
    console.log("🚀 ~ file: weather.js:8 ~ getWeather ~ response:", response)
      
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null; // O manejar el error de manera más específica
    }
  }

