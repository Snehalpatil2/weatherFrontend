
# Weather Report Application

## Project Overview

This Weather Report application allows users to search for weather details of any city. It fetches real-time weather data, displays the current temperature, weather condition, humidity, wind speed, and more. The application stores a history of searched cities, which is displayed in a dropdown list for easy access.

### Key Features:
- Search for a city and display weather information.
- Display weather details like temperature, humidity, wind speed, etc.
- Save and show the search history in a dropdown.
- Fetch weather data from a remote API.

## Setup Instructions

To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Snehalpatil2/weatherFrontend.git
   cd weatherFrontend
   ```

2. **Install dependencies:**
   This project uses no external dependencies, but it requires a browser environment to run.

3. **Open the project in your browser:**
   Open the `index.html` file in your preferred browser to view the application.

4. **Run the project:**
   Simply open the `index.html` file in your browser, and the weather report application will be ready to use.

## API Documentation

The weather data is fetched from the following API:

**API Endpoint:**
```
GET https://weatherserver-56oj.onrender.com/?city={city}
```

### Query Parameters:
- `city`: The name of the city for which you want to fetch the weather data.

### Response:
The API responds with a JSON object containing weather details such as:
- `temp`: Current temperature in °C.
- `weather_condition`: Description of the weather (e.g., Clear, Rainy).
- `humidity`: Humidity percentage.
- `wind_speed`: Wind speed in meters per second.
- `icon`: URL of the weather icon representing the condition.
- `city`: Name of the city.
- `min_temp`: Minimum temperature in °C.
- `max_temp`: Maximum temperature in °C.
- `feels_like`: Feels like temperature in °C.

### Example Response:
```json
{
  "message": {
    "temp": 25,
    "weather_condition": "Clear",
    "humidity": 60,
    "wind_speed": 3,
    "icon": "http://openweathermap.org/img/wn/01d.png",
    "city": "New York",
    "min_temp": 20,
    "max_temp": 28,
    "feels_like": 27
  }
}
```
###  Running in Development Mode

If you want to run the app in a development environment, you can set up a simple local server using tools like **Live Server** in Visual Studio Code or any other local server of your choice.

1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code.
2. Right-click on `index.html` and select "Open with Live Server."

This will start a local server and open the app in your browser.

## Design Decisions

1. **User Interface (UI):**
   - The UI is simple and responsive, using Flexbox for layout.
   - The search bar allows users to search for cities and displays a dropdown list of previously searched cities.
   - The weather information is displayed in a card format, with the temperature, weather condition, and other details clearly visible.

2. **Search History:**
   - The search history is stored in the browser's `localStorage`, so the history persists across sessions.
   - Cities are saved in lowercase to avoid duplication in the history list.

3. **Error Handling:**
   - If the user enters an invalid city or there is an issue with fetching the weather data, an error message is displayed.

4. **API Fetching:**
   - The weather data is fetched using the `fetch` API asynchronously to prevent blocking the UI.
   - The loader is displayed while the data is being fetched.

## Future Improvements

1. **Geolocation Support:**
   - Implement the ability to detect the user's location and fetch weather data for the current location automatically.

2. **Advanced Search Filters:**
   - Add the ability to search by ZIP code or coordinates.

3. **UI Enhancements:**
   - Improve the UI with animations and transitions for a smoother user experience.
   - Add additional weather details like UV index, sunrise, sunset, etc.

4. **Error Handling Enhancements:**
   - Provide more detailed error messages, such as when the city is not found or when there is no internet connection.

5. **Testing:**
   - Add unit tests and integration tests for better reliability and coverage.

## Notes About Platform Limitations

1. **API Rate Limiting:**
   - The weather API might have rate limits. Ensure that you are not making too many requests in a short period of time.

2. **Browser Compatibility:**
   - This application is designed to work in modern browsers (Chrome, Firefox, Edge). Older browsers may not support all features (e.g., `localStorage` or `fetch`).

3. **LocalStorage Limitations:**
   - The search history is stored in `localStorage`, which is limited in size (approximately 5MB per domain). If you store too many cities, the history might get truncated.

4. **Mobile Optimization:**
   - The UI is responsive, but further mobile optimizations (e.g., for smaller screens) could be made for a better experience on mobile devices.

## Conclusion

This Weather Report application provides an easy-to-use interface for checking weather conditions of any city. It stores search history, displays detailed weather data, and can be extended with additional features for better user experience. The application is lightweight and performs well on modern browsers.

## Author

Snehal Jitendra Patil
