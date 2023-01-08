input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.compassHeading()))
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
})
