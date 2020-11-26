interface Human12 {
  name: string;
  eat(): void;
}
// 类实现接口的时候 ，必须要实现 接口 的参数定义。 然后可以自己扩展 其他参数，
// 接口只能约束类的共有成员 这个成员的属性 是 public，
class Asian implements Human12 {
  constructor(public name: string) { }
  eat() {

  }
}


// 接口和类一样可以继承 相互继承 多个继承
interface Man extends Human12 {
  run(): void
}

interface Child {
  cry(): void
}
interface Boy extends Man, Child {

}
let boy: Boy = {  
  name: '',
  run() { },
  eat() { },
  cry() { }
}

/**
 * 接口还能继承类
 */

class Auto12{
  state=1
}
interface AutoInterface12 extends Auto12{

}

class xxx12 implements AutoInterface12{
  state = 1
}

// Auto12的子类也能实现AutoInterface12 接口
// 先继承子类 再实现接口
// 接口再抽离类的成员的时候。 不仅抽离了公共成员，受保护的成员 私有成员
/**
 * 下面这几话的理解， bus12继承Auto12，  AutoInterface12 继承类Auto12正好抽离出了类的成员，  然后前者实现了后者，
 * 那为什么可以不用实现 state 属性呢？  前者和后者 都是继承了 Auto12  
 * */ 

class Bus12 extends Auto12 implements AutoInterface12{

}

