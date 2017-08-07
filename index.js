var Gpio = require('pigpio').Gpio;

var red = new Gpio(17, { mode: Gpio.OUTPUT }),
    green = new Gpio(22, { mode: Gpio.OUTPUT }),
    blue = new Gpio(24, { mode: Gpio.OUTPUT });

red.pwmWrite(255);
