var now = new Date()
console.log(now.getTime())
console.log('Foo'.indexOf('c'))
console.log('Foo'.split('').reverse().join('').toUpperCase())
console.log('a b c d efg h i'.split(' '))
console.log('foo@bar.com, baz@biz.com, bar@foo.net'.split(', ').join('|'))
console.log('foo@bar.com, baz@biz.com, bar@foo.net'.replace(/, /g, '|'))
var cars = ['foo', 'bar', 'baz'];
cars.push('biz');
console.log(cars);

var lastCar = cars.pop()
console.log(lastCar);
console.log(cars);

var firstCar = cars.shift()
console.log(firstCar);
console.log(cars);
console.log('I can code Javascript all day'.slice(11, 21));

console.log('foo 1')

console.log('foo 2')
console.log(addTwoNumbers(5, 10))
console.log('foo 3')
console.log(addTwoNumbers(10, 20))
console.log('foo 4')

function addTwoNumbers(number1, number2) {
    var result = number1 + number2

    return result

    console.log(123);
}

var count = 0;
function addCount() {
    count++;
    alert(count)
}
console.log('Tev ir', 10, 'Naudiņas')
// addCount()
// addCount()
// addCount()
// addCount()

var foo = 10;
foo = foo + 5;
foo += 5;

var money = 100;

function addMoney(amout) {
    money = money + amout
    console.log(money)
}