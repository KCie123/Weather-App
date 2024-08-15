# Weather App

This Weather App allows users to input a location and receive real-time weather information. The application interacts with the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.

## Project Description

The Weather App is a simple, interactive web application built using HTML, CSS, and JavaScript. It allows users to search for the current weather in any city and displays relevant weather details such as temperature, humidity, and wind speed. The application also handles error scenarios, like invalid city names, by displaying a user-friendly error message.

### Key Features:
- **Real-Time Weather Data:** Fetches live weather data from the OpenWeatherMap API.
- **Responsive Design:** The app is styled to be responsive and user-friendly.
- **Error Handling:** Displays appropriate error messages for invalid input.

### Technologies Used:
- **HTML5**: Markup language for structuring the content.
- **CSS3**: Styling for layout and design.
- **JavaScript (ES6)**: Handles API requests and dynamic content updates.
- **OpenWeatherMap API**: Provides weather data for the application.

## How to Install and Run the Project

### Prerequisites
- A web browser (e.g., Chrome, Firefox)
- Internet connection (for fetching data from the OpenWeatherMap API)

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. **API Key Setup:**
   ```bash
      Obtain an API key from OpenWeatherMap.
      Replace the placeholder API key in index.js with your own:
      const APIKey = 'your_api_key_here'

3. **Run the Application:**
   ```bash
      Open index.html in your web browser.
      Enter a city name in the input field and click the search button to retrieve the weather data.
