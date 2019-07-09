function displayUserOutput() {
    var tempereture = document.getElementById("temp").value;
    console.log(tempereture);
//Adding a tempreture to be a variable.

//Tempreture is greater or equal to 30 degree.
    if(tempereture >=25) {
    document.getElementById("text").innerHTML = "Shorts,Caps and Bikin";
//Tempreture is 10 or greater than 10 but less or equal to 20 degress.
}   else if(tempereture >=10 && tempereture <=20){
    document.getElementById("text").innerHTML = "Wind breaker!";

//tempereture is equal/greater than -10 but less than 0.
}   else if(tempereture >=-10 && tempereture <0){
    document.getElementById("text").innerHTML = "Wear twice as warm,like be WARM!";
//Tempreture is greater than 5 but less than 12.
}   else if(tempereture >=5 && tempereture <=12){
    document.getElementById("text").innerHTML = "Wear a Jacket";
//When the input is not not the above,then the tempreture is not valid.    
}   else{
    document.getElementById("text").innerHTML ="Invalid tempreture";
}

}
/*const appKey = "f24f40b1c24 505685fce3b8acd0fcffc";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
//Search Bar
searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
} */