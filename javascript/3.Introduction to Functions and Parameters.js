let temperature = prompt('Please enter a temperature value in Celsius: ')

function tempConverter(temperature){
    let tempInFahrenheit = (temperature * 9/5) + 32.

    return tempInFahrenheit
}

console.log(tempConverter(temperature))