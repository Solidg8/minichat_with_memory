input.onGesture(Gesture.LogoUp, function () {
    list += -3
})
input.onButtonPressed(Button.A, function () {
    receivedString = text_list[list]
    radio.sendString("" + (receivedString))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    list += -1
})
input.onGesture(Gesture.TiltRight, function () {
    list += 1
})
input.onButtonPressed(Button.B, function () {
    if (zprava.length > 0) {
        for (let index = 0; index <= zprava_cislo - 1; index++) {
            basic.clearScreen()
            led.setBrightness(255)
            basic.showString("" + (zprava[index]))
        }
    }
    led.setBrightness(20)
})
radio.onReceivedStringDeprecated(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.clearScreen()
    led.setBrightness(255)
    basic.showString("" + (receivedString))
    zprava.insertAt(zprava_cislo, receivedString)
    zprava_cislo += 1
    led.setBrightness(20)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    list += 3
})
let zprava: string[] = []
let receivedString = ""
let text_list: string[] = []
let list = 0
let zprava_cislo = 0
led.setBrightness(20)
let citlivost = 400
zprava_cislo = 0
radio.setTransmitPower(7)
list = 0
let llist = 0
text_list = [".", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "."]
basic.forever(function () {
    basic.showString("" + (text_list[list]))
})
basic.forever(function () {
    if (list < 1) {
        list = 25 + list
    } else if (list > 25) {
        list = 1
    } else {
    	
    }
})
