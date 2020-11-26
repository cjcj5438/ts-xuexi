/**
 * 接口 只声明成员  不做实现。做约束的
 */

let add07: (x: number, y: number) => number
interface Add07 {
    (x: number, y: number): number
}
type Add071 = (x: number, y: number) => number

let add071: Add07 = (a, b) => a + b

// 混合接口
interface Lib07 {
    (): void;
    version: string;
    doSomething(): void;
}

// 实现混合接口，里面的每个方法都要实现的
/**
let lib07: Lib07 = (() => { }) as Lib07 // 这样还是会报错 ，要使用类型断言
lib07.version='1'
lib07.doSomething=()=>{}
 */
// 这是一个单例还是对全局有影响 ，所以要用函数封装下

function getLib07() {
    let lib07: Lib07 = (() => { }) as Lib07 // 这样还是会报错 ，要使用类型断言
    lib07.version = '1'
    lib07.doSomething = () => { }
}
let lib071=getLib07();
let lib072=getLib07();