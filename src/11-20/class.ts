// 抽象类 ， 不能被创建实例  只能被继承,
// 抽象类中定义方法。那么在子类中就不用再实现了。 实现了方法的复用
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 再抽象类中定义抽象方法，不具体实现。这样就构成了抽象方法
  abstract sleep(): void; // 在子类中想多态的写法
}
// let animal = new Animal()

class Dog11 extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  public name: string; // name属性在实例上不在原型上，且必须有初始值
  run() { } // 这在原型上

  sleep() {
    console.log('dog sleep')
  }
}
class Cat11 extends Animal {
  // 继承抽象类的时候可以 不用写 constructor  ？
  sleep() {
    console.log('cat sleep')
  }
}

let dog11 = new Dog11('gou')
dog11.eat()
dog11.sleep()
let cat11 = new Cat11();
cat11.sleep()

// let animal11:Animal[]=[dog11,cat11]
// animal11.forEach(i=>{
//   i.sleep()
// })

// 类的成员方法可以返回一个 this 可以很方便的实现链式调用

class WorkFlow11 {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
// 这样就实现的 方法的链式调用
new WorkFlow11().step1().step2()
class Myflow extends WorkFlow11 {
  next() {
    return this;
  }
}
// 父类和子类之间 调用
new Myflow().next().step1().next().step2()

let adsf = {
  "arrow": [1, 1], // The same as above.
  // The second number is how much space to the right, can be negative.
  "assignment": [1, 1], // The same as above.
  "comment": 2, // Special how much space to add between the trailing comment and the code.
  "colon": [0, 1], //The first number specify how much space to add to the left, can be negative.
}

// ! 红色的高亮注释
// ? 蓝色的高亮注释
// * 绿色的高亮注释
// todo 橙色的高亮注释
// // 灰色带删除线的注释
// 普通的注释


/**
  // ! 红色的高亮注释
  // ? 蓝色的高亮注释
  // * 绿色的高亮注释
  // todo 橙色的高亮注释
  // // 灰色带删除线的注释
*/

{
  {
    {
      {
        { }
      }
    }
  }
}
