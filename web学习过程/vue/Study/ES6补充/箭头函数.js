//箭头函数可以绑定this
// let obj = {
//   name: "赵同学",
//   sayHello() {
//     setInterval(function () {
//       console.log(this.name);
//     }, 1000);
//   },
// };
// obj.sayHello();  会返回undefined  因为this指向
let obj = {
  name: "赵同学",
  sayHello() {
    setInterval(() => {
      console.log(this.name);
    }, 1000);
  },
};
obj.sayHello(); //返回赵同学

// let func = function (a,b){
//   return a + b;
// };
// let func = (a, b) => {
//   return a + b;
// };
let func = (a, b) => a + b;
console.log(func(1,2));

