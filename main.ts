input.onButtonPressed(Button.A, function () {
    Lelaki += 1
    basic.showNumber(Lelaki)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("L:")
    basic.showNumber(Lelaki)
    basic.clearScreen()
    basic.showString("P:")
    basic.showNumber(Perempuan)
    basic.clearScreen()
    basic.showString("Jumlah:")
    basic.showNumber(Lelaki + Perempuan)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Perempuan += 1
    basic.showNumber(Perempuan)
    basic.clearScreen()
})
let Lelaki = 0
let Perempuan = 0
for (let index = 0; index < 3; index++) {
    soundExpression.hello.play()
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
basic.clearScreen()
basic.showString("Kehadiran5Inovatif")
Perempuan = 0
Lelaki = 0
