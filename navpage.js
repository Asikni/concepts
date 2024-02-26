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
      // console.log("Data for", buttonId, "already available:", weatherData[buttonId]);
      weatherData[buttonId];
    } else {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + key
      );
      const data = await resp.json();
      // console.log("Data for", buttonId, "fetched:", weatherData[buttonId]);
      weatherData[buttonId] = drawWeather(data); // Store the weather data
      
      ;
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


///////////////////////////////////////////

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



//////////////////////////// CHANGE PAGES///////////////////////////////
function changeToPageTwo() {
  history.pushState({}, "page2", "page2.html");
  fetchMyDocument();
}



async function fetchMyDocument() {      
  try {
    let response = await fetch("page2.html"); // Gets a promise
    document.body.innerHTML = await response.text(); // Replaces body with response

  } catch (err) {
    console.log('Fetch error:' + err); // Error handling

  }
}



function changeToPageone() {
 
  history.pushState({}, "page1", "second_site.html");
 
  homePage();
 }
 async function homePage() {   
   try {
     let response2 = await fetch("second_site.html"); // Gets a promise
     document.body.innerHTML = await response2.text(); // Replaces body with response
   } catch (err) {
     console.log('Fetch error:' + err); // Error handling
   }
 
     }
     




/////////////////////////////////////////////////////////////////////////////////////////

function addcar(car){
  
  document.getElementById('carname').value= document.getElementById(car).innerHTML
  document.getElementById("crossimg").style.display="block"
}

function openmenu(){
  document.getElementById('custom-select').style.display="block";
 
  
}

function clickoutside(){
 
  document.getElementById("custom-select").style.display="none";
  document.getElementById("carname").style.backgroundColor="white";
  document.getElementById("carname").style.border="thin solid black";
 
  
}

function changeBackground(event){
  document.getElementById("carname").style.backgroundColor="#DCDCDC";
  document.getElementById("carname").style.border="medium solid blue";
  event.stopPropagation();
}

function removeElements(event){
  document.getElementById("carname").value = "Search for Cars...";
  document.getElementById("crossimg").style.display="none";
  event.stopPropagation();

}

function rotate(event){
  document.getElementById('custom-select').style.display="block";
  document.getElementById('arrowimg').style.transform = "rotate(180deg)"
  event.stopPropagation();
}

function searchFilter() {
  let input, filter, options, option;
  input = document.getElementById('carname');
  filter = input.value.toUpperCase();
  console.log("this is filtter",filter)
  options = document.getElementById('custom-select').getElementsByTagName('div');

  for (let i = 0; i < options.length; i++) {
      option = options[i];
      // console.log(option)
      console.log(option.innerHTML.toUpperCase())
      console.log(option.innerHTML.toUpperCase().indexOf(filter))  //index of that word 
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
          option.style.display = 'block';
      } else {
          option.style.display = 'none';
      }
  }
}