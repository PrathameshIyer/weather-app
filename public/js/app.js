document
  .getElementById("submit-btn")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const cityVal = document.getElementById("city").value;
    const city_name = document.getElementById("city-name");
    const temp = document.getElementById("temp");
    const humidity = document.getElementById("humidity-sec");
    const weatherImage = document.getElementById("weathericon");
    const country_name = document.getElementById("country");
    const condition = document.getElementById("condition");
    const apikey = "a12f3ffa72e6dbd19d99c8a3b44de733";

    if (cityVal === "") {
      alert("Please enter a valid City Name.");
    } else {
      document.getElementById("weather-container").style.display = "flex";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apikey}`;

      const fetchApi = await fetch(url);
      const getData = await fetchApi.json();
      const arrData = [getData];
      const tempUnit = Math.round(arrData[0].main.temp - 273.15);
      temp.innerText = tempUnit;
      console.log(arrData);
      city_name.innerText = arrData[0].name + ",";
      condition.innerText = arrData[0].weather[0].description;

      humidity.innerText = arrData[0].main.humidity;
      country_name.innerText = arrData[0].sys.country;
      let dataIcon = arrData[0].weather[0].icon;

      weatherImage.src =
        await `http://openweathermap.org/img/wn/${dataIcon}.png`;
    }
  });
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date_name = document.getElementById("date");
const getDate = new Date();
let dayName = days[getDate.getDay()];
let monthName = months[getDate.getMonth()];
let hour = getDate.getHours();
let minutes = getDate.getMinutes();
let date = getDate.getDate();

date_name.innerText = `${dayName}, ${date} ${monthName}    ${hour}:${minutes}`;
