
const API_KEY = `25b6a861f3d0239f3878e13396ff95a5`
const saerchTemp = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displaytemp(data))
}

const setIneerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displaytemp = temarature => {
    setIneerText('city', temarature.name)
    setIneerText('temparature', temarature.main.temp)
    setIneerText('condition',  temarature.weather[0].main)
    
    // set weather icon 

    const url = `http://openweathermap.org/img/wn/${temarature.weather[0].icon}@2x.png`
    const imageIcon = document.getElementById("weather-icon");
    imageIcon.setAttribute('src', url)
}

