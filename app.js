//Selecting Elements
let input = document.getElementById('input');
const btn = document.getElementById('button');
const display = document.getElementById('display');

//Api Key
const key = "57e8f06a67f78bf4aa8d54589b7f750a";

input.addEventListener('keyup' , keyEvent);
btn.addEventListener('click' , doThis);

function keyEvent(e) {
	if(e.keyCode === 13){
		doThis();
	}
}

function doThis() {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`).then((res) => {
		return res.json()
	}).then((data) => {
		//console.log(data);
		const country = data.sys.country;
		const subDesc= data.weather[0].description;
		const icon = data.weather[0].icon;
		const cityName= data.name;
		const temp = data.main.temp;
		const humidity = data.main.humidity;
		const pressure = data.main.pressure;
		const sunrise = data.sys.sunrise;
		const sunset = data.sys.sunset;
		const windSpeed = data.wind.speed;
		const windDirection = data.wind.deg;

		display.innerHTML = `
			<div class='body'>
			<div>
				<h2>
			</div>			
				
					<li class='list-item'><span class='cityname'><strong>${cityName}</strong></span> <span>${country}</span></li>
					<li class='list-item'>${subDesc}</li>
					<li class='list-item'><img src='http://openweathermap.org/img/wn/${icon}@2x.png'></li>					
					<li class='list-item'>Temperature : ${temp}<span>&#8451;</span></li>
					<li class='list-item'>Wind Speed : ${windSpeed}<span>meter/sec</span></li>
					<li class='list-item'>Wind Direction : ${windDirection}<span>&#176;</span></li>
					<li class='list-item'>Humidity : ${humidity}% </li>
					<li class='list-item'>Pressure : ${pressure}hPa </li>
					<li class='list-item'>Sunrise : ${sunrise} </li>
					<li class='list-item'>Sunset : ${sunset} </li>
				
			</div>
		`

	}).catch((err) => {
		console.log('Wrong Typing Son')
	})
	input.value='';
}