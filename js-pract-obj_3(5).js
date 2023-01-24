//Переписать консольное приложение из предыдущего юнита на классы.

class Device {
  constructor(name, isOn) {
    this.type = "electrical";
    this.name = name;
    this.isOn = isOn;
    this.power = 0;
  }

  setPower(power) {
    console.log(`Power of ${this.name} is ${power} w`);
    this.power = power;
  }
}

class KitchenDevice extends Device {
  constructor(place, name, isOn) {
    super(name, isOn);
    this.place = place;
  }

  setPower(power) {
    console.log(`Power of kitchen device ${this.name} is ${power} w`);
    this.power = power;
  }
}

const oven = new KitchenDevice("oven", "kitchen", false);
const kettle = new KitchenDevice("kettle", "kitchen", true);
const lamp = new Device("lamp", true);
const laptop = new Device("laptop", true);

oven.setPower(3000);
kettle.setPower(1000);
laptop.setPower(2000);
lamp.setPower(500);

let devices = [oven, kettle, lamp, laptop];

function whatAllPower(devices) {
  return devices.reduce(
    (acc, device) => (device.isOn ? acc + device.power : acc),
    0
  );
}

let result = whatAllPower(devices);

console.log(`All power of devices is ${result} w`);
