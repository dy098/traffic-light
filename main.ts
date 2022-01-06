radio.onReceivedNumber(function (receivedNumber) {
	
})
basic.showString("top tl")
radio.setGroup(11)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.pause(5000)
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    for (let index = 0; index < input.runningTime(); index++) {
    	
    }
})
