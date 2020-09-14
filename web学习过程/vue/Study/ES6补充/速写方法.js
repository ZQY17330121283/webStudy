var obj = {
  name : "赵同学",
  // sayHello : function () {
  //   console.log(this.name);
  // }
  //函数可以写成这样
  sayHello(){
    console.log(this.name);
  }
};
obj.sayHello();