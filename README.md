
# Weather Report Web App

This web app allows users to search for weather reports of different cities. It retrieves weather data from a weather API and displays information such as temperature, humidity, wind speed, and more. The app also keeps a search history of cities for easy access.

## Features

- Search for weather reports by city name.
- Displays weather information such as temperature, humidity, wind speed, and more.
- Stores a search history of cities in the browser's local storage.
- Dropdown list of previously searched cities when focusing on the search input field.
- Handles errors such as empty city input or failed API requests.

## Prerequisites

Before running this web app, ensure that you have the following installed:

- **A modern web browser** (Chrome, Firefox, Edge, etc.)
- **Internet connection** to fetch weather data from the API.

## Setup Instructions

### 1. Clone the Repository

If you are using Git, you can clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Open the `index.html` File

You can run the web app by simply opening the `index.html` file in your preferred web browser. There is no server setup required for this app.

```bash
open index.html  # For macOS
start index.html # For Windows
xdg-open index.html # For Linux
```

### 3. Running the App

Once the `index.html` file is open in the browser, you can start interacting with the web app:

1. Type the name of a city in the search bar.
2. Select a city from the dropdown or click the "Search" button to view the weather details.
3. The app will display the weather information for the selected city.
4. The app saves your previous searches in local storage, and these cities will appear in the dropdown list when you focus on the search input.

### 4. Customizing the App

If you want to modify or extend the app, you can edit the following files:

- `index.html`: Contains the structure and layout of the web app.
- `styles.css`: You can customize the styling of the app here.
- `script.js`: Contains the logic for fetching weather data, handling user input, and updating the UI.

### 5. API Endpoint

The app uses the following weather API to fetch data:

```
https://weatherserver-56oj.onrender.com/?city=<city-name>
```

You can replace the API URL with your own weather API if desired.

### 6. Running in Development Mode

If you want to run the app in a development environment, you can set up a simple local server using tools like **Live Server** in Visual Studio Code or any other local server of your choice.

1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code.
2. Right-click on `index.html` and select "Open with Live Server."

This will start a local server and open the app in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
