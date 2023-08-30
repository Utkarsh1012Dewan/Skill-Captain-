let apiKey = "70ccbcc0fd80dd4d1fe00b8e156b6f25";

let weather = async function fetchWeather(city) {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  );
  let data = await response.json();
  console.log("The weather is:", data);
};

weather("Delhi");
