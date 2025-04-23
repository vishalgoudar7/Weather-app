const apikey="e627da5b5083958e49a0f7876d05c9c7";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

            if(data.weather[0].main == "clouds"){
                weatherIcon.src = "img/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src ="img/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src ="img/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src ="img/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src ="img/mist.png";
            }
            
            document.querySelecter(".weather").style.display = "block";
            
        }
        

    
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);

        })