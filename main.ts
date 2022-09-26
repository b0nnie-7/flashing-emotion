input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
