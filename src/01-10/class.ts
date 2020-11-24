/**
 * class 基本实现

 */
class Dog09 {
  constructor(name: string) {
    this.name = name;
  }
  // private constructor(){}  私有的构造函数， 这个类就不能被实例化，不能被子类继承
  // protected constructor(){}  受保护的构造函数， 这个类就不能被实例化，只能被子类继承 ， 相当于声明了一个  基类
  public name: string; // name属性在实例上不在原型上，且必须有初始值
  private pri() { } // 私有成员只能在类的本身，不能被类的实例调用，也不能被子类调用
  protected pro() { } // 受保护成员 只能在类中，和子类中被访问，不能在类的实例中访问
  readonly legs: number = 4;  // 只读属性  不能被更改的，也同样要被初始化 
  static food: string = 'boon' // 静态成员 ，只能通过类名 以及 类的子类 来调用 ，不能通过实例来调用
  run() { } // 这在原型上
}

class Husky extends Dog09 {
  constructor(name: string, color: string) {
    super(name); // 派生类必须有super方法调用， 且父类中有的函数，子类也必须有
    this.color = color; // 一定要在super 之后调用
  }
  // 添加子类自己的方式的时候，也要在构造函数中初始化
  color: string
}

// 类的成员修饰符
/**
 * publick
 */

// 类 构造函数的参数 也可以添加修饰符  ： 作用是 自动将参数变成实例的属性

class Cat extends Dog09 {
  constructor(name: string, public color: string) {
    super(name);
  }
}