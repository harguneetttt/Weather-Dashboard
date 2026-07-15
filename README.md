# 🌦️ Weather Dashboard

A simple Weather Dashboard built using **HTML, CSS, and JavaScript**. The application allows users to log in with predefined credentials and view real-time weather information for any city using the WeatherAPI.

---

## Features

- 🔐 User Login Authentication
- 🌍 Search weather by city name
- 🌡️ Display current temperature
- 💧 Display humidity
- 🌬️ Display wind speed
- ☁️ Display weather condition
- 🎨 Dynamic background changes based on weather conditions
- ⚠️ Error handling for invalid city names and API failures

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- WeatherAPI
- Fetch API

---

## Project Structure

```
Weather-Dashboard/
│
├── index.html          # Login page
├── dash.html           # Weather dashboard
├── login.js            # Login functionality
├── dash.js             # Weather fetching logic
├── style.css           # Styling
├── users.json          # User credentials
├── images/
│   ├── sunny.gif
│   ├── cloud.gif
│   ├── rain.gif
│   ├── snow.gif
│   ├── storm.gif
│   └── default.jpeg
└── README.md
```

---

## How It Works

### 1. Login

The user enters a username and password.

The application checks the credentials stored in `users.json`.

- If the credentials are valid, the user is redirected to the weather dashboard.
- Otherwise, an error message is displayed.

---

### 2. Search Weather

After logging in:

1. Enter the name of a city.
2. Click the **Search** button.
3. The application sends a request to WeatherAPI.
4. The current weather details are displayed on the dashboard.

---

## Weather Information Displayed

- Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)
- Weather Condition

---

## Dynamic Backgrounds

The background image changes automatically according to the current weather.

| Weather Condition | Background |
|-------------------|------------|
| Sunny / Clear | `sunny.gif` |
| Cloudy | `cloud.gif` |
| Rain / Drizzle | `rain.gif` |
| Snow / Blizzard | `snow.gif` |
| Thunderstorm | `storm.gif` |
| Others | `default.jpeg` |

---

## API Used

This project uses the **WeatherAPI** to fetch real-time weather information.

Website:

https://www.weatherapi.com/

Example Request:

```
https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London&aqi=no
```

---

## Setup Instructions

1. Clone the repository.

```bash
git clone https://github.com/your-username/Weather-Dashboard.git
```

2. Open the project folder.

3. Obtain a free API key from WeatherAPI.

4. Open `dash.js`.

Replace:

```javascript
const apiKey = "API KEY";
```

with

```javascript
const apiKey = "YOUR_API_KEY";
```

5. Run the project using a local server (such as VS Code Live Server).

---

## Sample Login Credentials

The login details are stored inside `users.json`.

Example:

```json
[
  {
    "username": "admin",
    "password": "admin123"
  }
]
```

---

## Future Enhancements

- 5-day weather forecast
- Geolocation support
- Temperature unit conversion (°C / °F)
- Weather icons
- Dark mode
- Save recent searches
- Responsive mobile design

---

## Screenshots

Add screenshots of:

- Login Page
- Weather Dashboard
- Sunny Background
- Rainy Background

---

## Author

**Harguneet Kaur**

B.E. Computer Science Engineering (AI & Future Technologies)

Chitkara University

---

## License

This project is developed for educational purposes.
