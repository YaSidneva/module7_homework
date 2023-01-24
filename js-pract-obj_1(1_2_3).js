/*Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/

const obj1 = { a: 1, b: true, c: "string" };

function func1(obj1) {
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      console.log(key + " : " + obj1[key]);
    }
  }
}
func1(obj1);


/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const obj2 = {
  a2: 12,
  b2: "str",
  c2: null,
};

let str = "str";

function func2(arg1, arg2) {
  if ("a2" in obj2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
func2(str, obj2);


/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function createObj() {
  const emptyObj = Object.create(null);
  console.log(emptyObj);
}

createObj();
