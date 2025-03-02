let cars = [];
cars.push("audi");
cars.push("kia");
cars.push("BMW");
cars.unshift("kia");
// cars.pop()
// cars.shift()

console.log(cars.slice(1, 3));

console.log(cars);

let num = [1, 2, 3];

let x = [...cars, ...num];

let y = cars.concat(num);
// x.shift()
y[2] = "5";

// console.log(x);
// console.log(y);

let c = y.forEach((i, index) => {
  console.log(i, index);
});


console.log(c)


let a = y.map((i, index) => {
  return i + 1;
});

console.log(a);

let z = x.filter((i) => i === "kia");
console.log(z);

let t = x.find((i) => i === "kia");

console.log(t)

let b = [10, 1, 3, 4, 7]

let sum = b.reduce((i, b)=> i+b, 5)
console.log(sum)

let e = cars.sort()
console.log(e)

