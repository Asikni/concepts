let activeButton = null;

function changeContent(content, buttonId) {
    if (activeButton) {
        document.getElementById(activeButton).classList.remove("myStyle");
    }

    const list= document.getElementById(buttonId).classList;
    list.add("myStyle");

    activeButton = buttonId;

    document.getElementById('content').innerHTML = document.getElementById(content).innerHTML;
    switch (buttonId){
        case "bar5":
            weatherBallon( 1255634 );
            break;
        case "bar6":
            weatherBallon( 1275339 );
            break;
        case "bar7":
            weatherBallon( 1261481 );
            break;
        case "bar8":
            weatherBallon( 2176973 );
             break;

        case "bar9":
            weatherBallon(5174095 );
            break;
        case "bar10":
            weatherBallon( 2643743 );
            break;

      
    }

}

const key = '50c2bc48e2ae5b37bf4637a5d16d2377';
if(key=='') document.getElementById('temp').innerHTML = ('');



function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {  //check for await and async
    
    console.log(data);
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
  console.log("error")
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);

  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
