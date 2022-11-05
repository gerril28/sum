let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("1+2+3+4+5+6+7+8+9+10=")
    for (let index = 0; index <= 10; index++) {
        number = number + index
    }
    basic.showNumber(number)
})
