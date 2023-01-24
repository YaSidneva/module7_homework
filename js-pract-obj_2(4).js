/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.

Определите иерархию электроприборов.
Включите некоторые в розетку.
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.*/

function Device(name, isOn) {
  this.type = "electrical";
  this.name = name;
  this.isOn = isOn;
  this.power = 0;
}

Device.prototype.setPower = function (power) {
  console.log(`Power of ${this.name} is ${power} w`);
  this.power = power;
};

function KitchenDevice(name, place, isOn) {
  this.name = name;
  this.place = place;
  this.isOn = isOn;
}

KitchenDevice.prototype = Object.create(Device.prototype);

KitchenDevice.prototype.setPower = function (power) {
  console.log(`Power of kitchen device ${this.name} is ${power} w`);
  this.power = power;
};

const oven = new KitchenDevice("oven", "kitchen", true);
const kettle = new KitchenDevice("kittle", "kitchen", true);
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
