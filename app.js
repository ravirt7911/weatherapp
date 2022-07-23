var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

var namecity= document.querySelector(".namecity");
var desc=document.querySelector(".desc");
var temp=document.querySelector(".temp");
var wind=document.querySelector(".wind");

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c9127937b67652e78b3625527874b2cb')
    .then(response => response.json())
    .then(data => {
        var cityValue = data['name'];
        var tempValue = data['main']['temp'] - 273.15 ;
        tempValue = parseInt(tempValue).toFixed(2) + " Celsius ";
        var descValue = data['weather'][0]['description'] + " can be seen " ;
        var windValue = "The wind is blowing at a speed of "+data['wind']['speed']+" km/h";

        namecity.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        wind.innerHTML = windValue;

    })
    // => console.log(err
.catch(err => {
    alert("Please enter the city name correctly :)");
})

})



