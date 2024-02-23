let activeButton = null;
let weatherData = {};


function changeContent(content, buttonId) {
  console.log("call");
  if (activeButton) {
    document.getElementById(activeButton).classList.remove("myStyle");
  }

  const list = document.getElementById(buttonId).classList;
  list.add("myStyle");

  activeButton = buttonId;
  document.getElementById("content").innerHTML =
    document.getElementById(content).innerHTML;

  switch (buttonId) {


    case "bar6":
      weatherBallon(1275339, buttonId);
      break;
    case "bar7":
      weatherBallon(1261481, buttonId);
      break;
    case "bar8":
      weatherBallon(2176973, buttonId);
      break;
    case "bar9":
      weatherBallon(5174095, buttonId);
      break;
    case "bar10":
      weatherBallon(2643743, buttonId);
      break;
    case "bar11":
      weatherBallon(1255634, buttonId);
      break;

  }
}

const key = "50c2bc48e2ae5b37bf4637a5d16d2377";
if (key == "") document.getElementById("temp").innerHTML = "";

async function weatherBallon(cityID, buttonId) {
  try {
    document.getElementById("loader").style.display = "flex";

    // Check if weather data already available
    if (weatherData[buttonId]) {
      console.log("Data for", buttonId, "already available:", weatherData[buttonId]);
      drawWeather(weatherData[buttonId]);
    } else {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + key
      );
      const data = await resp.json();
      weatherData[buttonId] = data; // Store the weather data
      console.log("Data for", buttonId, "fetched:", weatherData[buttonId]);
      drawWeather(data);
    }
  } catch (e) {
    console.error("Error fetching weather data:", e);
  } finally {
    // Hide the loader and display the weather content
    document.getElementById("loader").style.display = "none";
  }
}

function drawWeather(d) {
  if (!d) {
    console.error("Invalid weather data:", d);
    return;
  }

  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var description = d.weather[0].description;

  document.getElementById("description").innerHTML = description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;

  if (description.indexOf("rain") > 0) {
    document.body.className = "rainy";
  } else if (description.indexOf("cloud") > 0) {
    document.body.className = "cloudy";
  } else if (description.indexOf("sunny") > 0) {
    document.body.className = "sunny";
  } else {
    document.body.className = "clear";
  }
}


async function fetchMyDocument() {      
  try {
    let response = await fetch('C:/Users/hp/Documents/office/second_site/page2.html'); // Gets a promise
    document.body.innerHTML = await response.text(); // Replaces body with response
  } catch (err) {
    console.log('Fetch error:' + err); // Error handling
  }
}











function myFunction() {
  let text = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + text;
}


function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo2").innerHTML = "You selected: " + x;
}

document.getElementById("fname").addEventListener("change", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}


document.getElementById("range").addEventListener("input", function() {
  sliderChange(this.value);
});

function sliderChange(value) {
  document.getElementById("demo3").innerHTML = value;
}

document.getElementById("range2").addEventListener("change", function() {
  sliderChange2(this.value);
});

function sliderChange2(value) {
  document.getElementById("demo4").innerHTML = value;
}