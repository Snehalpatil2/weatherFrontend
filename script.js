let searchHistory = [];

const root = document.querySelector('#root');
root.innerHTML = `<div id="header"></div>
<div id="main"></div>`
const header = document.querySelector('#header');
header.innerHTML = `
  <div id="Search-card" class="card ">
      <span>Weather Report</span>
      <div class="row">
      <div id="searchInput" class="col-lg-8">
        <input id="searchCity" class="form-control" type="search" placeholder="Search City" aria-label="Search">
        <ul type="none" id="dropdown" class="hide"></ul>
      </div>
      <div class="col-lg-4 mx-auto">
        <button class="btn btn-outline-success" onclick="getCity()">Search</button>
      </div>
      </div>
  </div>`

document.querySelector("#searchCity").addEventListener('focusin', () => {
  const dropdown = document.querySelector("#dropdown");
  dropdown.classList.remove("hide");
  const storedArray = localStorage.getItem("searchHistory");
  const parsedArray = storedArray ? JSON.parse(storedArray) : [];
  dropdown.innerHTML = "";
  parsedArray.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `${element}`;
    li.addEventListener('click', () => {
      document.getElementById('searchCity').value = element;
      dropdown.classList.add("hide");
    });
    dropdown.appendChild(li);
  });
});



function insertCity(city) {
  const storedArray = localStorage.getItem("searchHistory");
  const parsedArray = storedArray ? JSON.parse(storedArray) : [];
  if (!(parsedArray.includes(city.toLowerCase()))) {
    parsedArray.push(city.toLowerCase());
    localStorage.setItem("searchHistory", JSON.stringify(parsedArray));
  }
}

const loader = () => {
  const main = document.querySelector("#main");
  main.innerHTML = `<div id="load-data"><span class="loader"></span></div>`
}


const renderError = (msg) => {
  const main = document.querySelector('#main');
  main.innerHTML = `
    <div class="row"> 
    <div id="Error-box" class="card col-lg-3 mx-auto">
     <h1>${msg}</h1>   
    </div>
    </div>`
}


const getCity = async () => {
  const dropdown = document.querySelector("#dropdown");
  dropdown.classList.add("hide");
  const main = document.querySelector('#main');
  const City = document.querySelector("#searchCity").value;
  if (City == '') {
    renderError("Please Enter City!");
  }
  else {
    try {
      loader();
      let response = await fetch(`https://weatherserver-56oj.onrender.com/?city=${City}`);
      const data = await response.json();
      if (!response.ok) {
        renderError(data.message);
      }
      else {
        insertCity(City);
        const curr_date = new Date();
        const date = curr_date.getDate();
        const month = curr_date.getMonth();
        const year = curr_date.getFullYear();
        const hh = curr_date.getHours();
        const mm = curr_date.getMinutes();
        const day = curr_date.getDay();
        const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
        const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const { temp, weather_condition, humidity, wind_speed, icon, city, min_temp, max_temp, feels_like } = data.message;
        console.log(data);
        main.innerHTML = `
          <div id="weather-dashboard" class="dashboard row">
            <div id="left-card" class="card col-lg-3 mx-auto mt-3">
                <div class="header">${city} </div>
                <div class="temperature" id="temperature">${temp}°C</div>
                <img class="icon"src="${icon}">
              <div id="weather-status" class="text-center" >${weather_condition}</div><div id="feels-like" class="text-center"><b>Feels like:</b> ${feels_like}°C</div>
              <div id="feels-like" class="text-center"></div>
            </div>

            <div id="middle-card" class="card col-lg-3 mx-auto mt-3">
              <span class="details">Details</span>
              <div id="details">
                <div class="upper-row">
                  <div id="humidity-status" class="text-center weather-details">
                    <img src="humidity.png">
                    <span id="details-data">${humidity}%</span>
                    <b><span id="details-label">Humidity</span></b>
                </div>
                <div id="wind-speed-status" class="text-center weather-details">
                    <img src="wind.png">
                    <span id="details-data">${wind_speed} m/s</span>
                    <span id="details-label"><b>Wind Speed</b></span>
                </div>
                </div>
                <div class="lower-row">
                <div id="min-temp" class="text-center weather-details"> 
                  <img src="min_temp.png">
                  <span id="details-data">${min_temp}°C</span>
                  <span id="details-label"><b>Min temp</b></span>
                </div> 

                <div id="max-temp" class="text-center  weather-details">
                  <img src="max_temp.png">
                  <span id="details-data">${max_temp}°C</span>
                  <span id="details-label"> <b>Max temp</b></span>
                </div>
              </div>
            </div>
          </div>

          <div id="right-card" class="card col-lg-3 mx-auto mt-3">
            <div class="time" id="day">${weekDay[day]}</div>
            <div class="time" id="date">${date} ${Month[month]} ${year}</div>
            <div class="time" id="time">${hh}:${(mm < 10) ? '0' : ''}${mm}</div>
          </div>
        </div>`
      }
    } catch (error) {
      console.log(error);
      renderError(error.message);
    }
  }
}



