async function getWeather(){
    const city = document.getElementById("city").value;
    const apiKey = "API KEY";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    try{
        const result = await fetch(url);
    const data = await result.json();

    if(data.error){
        alert(data.error.message);
        return;
    }
    console.log(data);

    document.getElementById("temp").textContent = data.current.temp_c + " °C";
    document.getElementById("humid").textContent = data.current.humidity + " %";
    document.getElementById("windy").textContent = data.current.wind_kph + " km/h";
    document.getElementById("cond").textContent = data.current.condition.text;

    let condition = data.current.condition.text.toLowerCase();
    let image = "";
    
    if(condition.includes("sunny") || condition.includes("clear")){
        image = "images/sunny.gif";
    }
    else if(condition.includes("cloud")){
        image = "images/cloud.gif";
    }
    else if (condition.includes("rain") || condition.includes("drizzle")) {
        image = "images/rain.gif";
    }
    else if (condition.includes("snow") || condition.includes("sleet") || condition.includes("blizzard")) {
        image = "images/snow.gif";
    }
    else if (condition.includes("thunder") || condition.includes("storm")) {
        image = "images/storm.gif";
    }
    else {
        image = "images/default.jpeg";
    }
    document.body.style.backgroundImage = `url('${image}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    } catch (error) {
        alert("Unable to fetch weather data.");
        console.log(error);
    }
}
