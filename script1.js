const celciusl = document.getElementById("Celcius");   
const fahrenheitl = document.getElementById("Fahrenheit")
const kelvinl = document.getElementById("Kelvin");

function computeTemp(event){
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitl.value = (currentValue * 9 / 5) + 32;
            kelvinl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusl.value = (currentValue - 32) * 5 / 9;
            kelvinl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusl.value = currentValue - 273.15;
            fahrenheitl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}