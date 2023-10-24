// 非异常失败（Non-exception 失败）
const user = {
  name: "Daniel",
  age: 26,
};

// console.log(user.location);

// tsc TypeScript 编译器（tsc，the TypeScript compiler）

// console.log(new Date()); // [object Date]     Date Wed Sep 06 2023 10:08:25 GMT+0800 (China Standard Time)
// console.log(Date());     // [object String]   Wed Sep 06 2023 10:08:42 GMT+0800 (China Standard Time)

// 添加了类型注解
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// Argument of type 'string' is not assignable to parameter of type 'Date'. => 类型“string”的参数不能赋给类型“Date”的参数。
// greet("Brendan", Date());

greet("Brendan", new Date());

// Any
// let obj: any = { x: 0 };
// obj.foo();
// obj();
// obj.bar = 100;
// obj = '100';
// const n: number = obj;


// 变量上的类型注解（Type Annotations on Variables）
let myName: string = "Alice";







