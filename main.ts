input.onButtonPressed(Button.A, function () {
    Score = 0
    Time_Left = "yes"
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(250)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(120000)
    Time_Left = "no"
    basic.pause(100)
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        basic.showNumber(Score)
    }
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Score)
})
let Time_Left = ""
let Score = 0
Score = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.showString("Press A!")
basic.forever(function () {
    if (Time_Left == "yes") {
        WaitUntilBlocks.waitUntilPinPressed(TouchPin.P1)
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.pause(1000)
        Score += 1
        basic.showNumber(Score)
        basic.pause(1500)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        WaitUntilBlocks.waitUntilPinPressed(TouchPin.P2)
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(1000)
        Score += 1
        basic.showNumber(Score)
        basic.pause(1500)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
