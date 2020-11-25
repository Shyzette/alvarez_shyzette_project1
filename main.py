while True:
    print("Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 90:
        light.set_all(light.rgb(255,0,255))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) > 70:
        light.set_all(light.rgb(255,0,0))
    else:
        light.set_all(light.rgb(0,0,255))
