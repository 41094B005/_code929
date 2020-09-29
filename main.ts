let degrees = 0
input.onPinReleased(TouchPin.P0, function () {
    degrees = randint(80, 100)
    basic.showNumber(degrees)
    if (degrees <= 84) {
        basic.showString("A-")
    }
    if (degrees <= 89) {
        basic.showString("A")
    }
    if (degrees <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
