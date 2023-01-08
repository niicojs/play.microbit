input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("BOOM!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (input.temperature()))
})
