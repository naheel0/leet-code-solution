function convertTemperature(celsius: number): number[] {
   let Kelvin = celsius + 273.15;
   let Fahrenheit = celsius * 1.80 + 32.00;
   Kelvin=parseFloat(Kelvin.toFixed(8));
   Fahrenheit=parseFloat(Fahrenheit.toFixed(8));
   return[Kelvin,Fahrenheit];
};