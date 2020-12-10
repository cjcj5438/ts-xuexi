/**
 * 泛型
 * ? 类型推断都是 右向 左的推断
 * ? 上下文推断 是从左到右的
 */
let b = [1, null]
// 类型断言
interface Foo15 {
  bar: number
}
// let foo15 = {} as Foo15
// foo15.bar = 1
// 其实比较好的是在声明的时候，就声明
let foo15: Foo15 = {
  bar: 13212456787
}
console.log(foo15.bar)
