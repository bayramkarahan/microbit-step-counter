input.onButtonPressed(Button.A, function () {
    adim = 0
})
input.onGesture(Gesture.Shake, function () {
    adim += 1
})
let adim = 0
adim = 0
basic.forever(function () {
    basic.showNumber(adim)
})
