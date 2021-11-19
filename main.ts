basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) < 350) {
        servos.P0.run(0)
    } else if (pins.analogReadPin(AnalogPin.P1) > 350 && pins.analogReadPin(AnalogPin.P1) < 1000) {
        servos.P0.run(25)
    } else {
        servos.P0.run(100)
    }
})
