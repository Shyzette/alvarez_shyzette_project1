while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 90) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
