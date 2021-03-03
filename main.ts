input.onButtonPressed(Button.A, function () {
    if (Number2 == 1) {
        _1 += 1
        basic.showNumber(_1)
    } else {
        _2 += 1
        basic.showNumber(_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Number2 == 1) {
        Number2 = 2
    } else {
        Number2 = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Number2 == 1) {
        _1 += -1
        basic.showNumber(_1)
    } else {
        _2 += -1
        basic.showNumber(_2)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(_2)
    basic.pause(1000)
    basic.showNumber(_1)
})
let Number2 = 0
let _2 = 0
let _1 = 0
basic.showString("Swapping Numbers")
_1 = 0
_2 = 0
Number2 = 1
