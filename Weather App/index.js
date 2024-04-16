var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="0ec43cd1121ee0d9231b8b76c2f43491"
function convertion(val)
{
    return(val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data=>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temprature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML=`Weather of <span>${nameval}</span>`
            temp.innerHTML=`Temprature: <span>${convertion(temprature)}C</span>`
            description.innerHTML=`Sky Conditions:<span>${descrip}</span>`
            wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h</span>`

        })
        .catch(err => alert('You Entered Wrong City Name'))
})
