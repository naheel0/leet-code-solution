/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin=celsius+273.15;
    let Fahrenheit = celsius * 1.80 + 32.00;
    kelvin=parseFloat(kelvin.toFixed(8))
    Fahrenheit=parseFloat(Fahrenheit.toFixed(8))
    return [kelvin,Fahrenheit]
};