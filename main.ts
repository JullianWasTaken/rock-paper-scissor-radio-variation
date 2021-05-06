radio.onReceivedNumber(function (receivedNumber) {
    received = true
    secondaryHand = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    // 1paper, 2rock, 3scissors
    primaryHand = randint(1, 3)
    if (primaryHand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (primaryHand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    selected = true
    radio.sendNumber(primaryHand)
})
let secondaryHand = 0
let received = false
let selected = false
let primaryHand = 0
radio.setGroup(23)
primaryHand = 0
selected = false
received = false
basic.forever(function () {
    if (selected == true && received == true) {
        selected = false
        received = false
        if (primaryHand == secondaryHand) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        } else {
            if (primaryHand == 1 && secondaryHand == 2) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            } else if (primaryHand == 1 && secondaryHand == 3) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            } else if (primaryHand == 2 && secondaryHand == 1) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            } else if (primaryHand == 2 && secondaryHand == 3) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            } else if (primaryHand == 3 && secondaryHand == 1) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            } else {
                // last for if primaryHand 3 and secondary is 2. this is for the 3 to 2 situation, which is scissors against rock
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            }
        }
    }
})
