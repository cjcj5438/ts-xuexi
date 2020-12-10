/**
 * 14 泛型类和泛型约束
 *
 */

// ?泛型类不能运用到泛型类的静态成员。 static
class Log<T>{
  run(value: T) {
    return value
  }
}

interface Length {
  length: number
}
function log14<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}

// 泛型约束  只有有length 属性就可以 
log14([1])
log14('123')
log14({ length: 1 })

