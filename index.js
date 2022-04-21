var formEl = document.querySelector('form')

formEl.onsubmit = function(e) {

    // prevents form submission
    e.preventDefault();
    const location = document.getElementById('locationInput').value
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=e080a84cdc0848587498c54f0b6c1a10", true);
    req.onload = function() {
        var jsonResponse = JSON.parse(req.responseText);
        // do something with jsonResponse
        if (jsonResponse['cod'] == 404) {
            document.getElementById('message').innerHTML = 'Location Not Found';
            document.getElementById('watherInfo').innerHTML = "";
        } else {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            document.getElementById('message').innerHTML = location
            var imageData = "";
            if (jsonResponse['weather']['0']['description'] == "clear sky") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/01d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/01n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "few clouds") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/02d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/02n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "scattered clouds") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/03d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/03n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "broken clouds") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/04d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/04n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "shower rain") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/09d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/09n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "rain") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/10d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/10n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "thunderstorm") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/11d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/11n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "snow") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/13d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/13n@2x.png'>"
            } else if (jsonResponse['weather']['0']['description'] == "mist") {
                if (today.getHours() >= 6 && today.getHours() <= 18)
                    imageData += "<img src='http://openweathermap.org/img/wn/50d@2x.png'>"
                else
                    imageData += "<img src='http://openweathermap.org/img/wn/50n@2x.png'>"
            }



            document.getElementById('watherInfo').innerHTML = "<a href='#'>Click to view map</a>" + "<br />" + imageData + "<br/>" + jsonResponse['weather']['0']['description'] + "<br/><br/>" + "Current: " + jsonResponse['main']['temp'] + "<br/>Feels Like: " + jsonResponse['main']['feels_like'] + "<br/><br/>Last Updated: " + time;
        }

    };
    req.send(null);

}
