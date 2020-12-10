/**
 * 13 泛型函数和泛型接口
 * 
 */


function log13(value: any): any {
  return value
}
// 泛型改写
function log131<T>(value: T): T {
  return value
}
// 嗲用方式 
log131<string[]>(['a', 'b'])
log131(['a', 'b'])  // 类型推断直接调用


// 泛型不仅可以定义函数， 还可以定义函数类型
type Log13 = <T>(value: T) => T
let myLog: Log13 = log131 // ! 这里为什么可以直接等于这个log131, 岂不是重复写了

// 泛型接口
interface LogInterface<T> { // 如果写在这里 ，那么接口的里面所有成员都受到约束
  <T>(value: T): T // 接口成员收到泛型接口的约束了。
}

let myLog13: LogInterface<number> = log131
myLog13(1)
