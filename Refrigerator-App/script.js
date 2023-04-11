// Getting the netflix button and view-port elements by their classnames
const viewPort = document.querySelector(".viewPort");
const watchTvBtn = document.querySelector(".watch-tv");
const browseBtn = document.querySelector(".browse");
const openFridgeBtn = document.querySelector(".open-fridge");
const weatherBtn = document.querySelector(".show-weather");
const timeBtn = document.querySelector(".time");
const increaseBtn = document.querySelector(".icon-up");
const decreaseBtn = document.querySelector(".icon-down");
const toFehrenheit = document.querySelector(".to-fehrenheit");
const toCelcius = document.querySelector(".to-celcius");

watchTvBtn.addEventListener("click", function () {
  // Set the background image
  viewPort.style.backgroundImage = 'url("netflix.jpeg")';
});

// browse button functionalities
browseBtn.addEventListener("click", function () {
  // Set the background image
  viewPort.style.backgroundImage = 'url("google.jpg")';
});

// fridge button functionalities
openFridgeBtn.addEventListener("click", function () {
  // Set the background image
  viewPort.style.backgroundImage = 'url("fridge.jpg")';
});

// weather button functionalities
weatherBtn.addEventListener("click", function () {
  // Set the background image

  viewPort.style.backgroundImage = 'url("weather.jpg")';
});

// time
setInterval(() => {
  let date = new Date();
  timeBtn.innerHTML = date.toLocaleTimeString();
}, 1000);

//TEMPERATURE
const temperatureDisplay = document.querySelector(".temperature-display");
let temperature = 0; // initial temperature value in Celsius

// function to update the temperature display
function updateTemperatureDisplay() {
  if (temperatureDisplay.textContent.endsWith("°C")) {
    temperatureDisplay.textContent = `TEMP: ${temperature}°C`;
  } else {
    temperatureDisplay.textContent = `TEMP: ${temperature}°F`;
  }
}

// function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit.toFixed(1); // round to 1 decimal place
}

// function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toFixed(1); // round to 1 decimal place
}

// event listener for increasing temperature
increaseBtn.addEventListener("click", function () {
  temperature++;
  updateTemperatureDisplay();
});

// event listener for decreasing temperature
decreaseBtn.addEventListener("click", function () {
  temperature--;
  updateTemperatureDisplay();
});

// event listenerS for switching between Celsius and Fahrenheit
toFehrenheit.addEventListener("click", function () {
  if (temperatureDisplay.textContent.endsWith("°C")) {
    // switch to Fahrenheit
    const fahrenheit = convertToFahrenheit(temperature);
    temperatureDisplay.textContent = `TEMP: ${fahrenheit}°F`;
  }
});

toCelcius.addEventListener("click", function () {
  if (temperatureDisplay.textContent.endsWith("°F")) {
    // switch to Celsius
    const celsius = convertToCelsius(temperature);
    temperatureDisplay.textContent = `TEMP: ${celsius}°C`;
  }
});
