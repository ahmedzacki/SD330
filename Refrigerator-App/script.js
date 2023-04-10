// Getting the netflix button and view-port elements by their classnames
const viewPort = document.querySelector(".viewPort");
const watchTvBtn = document.querySelector(".watch-tv");
const browseBtn = document.querySelector(".browse");
const openFridgeBtn = document.querySelector(".open-fridge");
const weatherBtn = document.querySelector(".show-weather");
const timeBtn = document.querySelector(".time");
// Adding a click event listener to the button
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
