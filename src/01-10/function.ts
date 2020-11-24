/**
 *  函数定义的几种方法

function add081(x: number, y: number) {
    return x + y
}
let add082: (x: number, y: number) => number

type add083 = (x: number, y: number) => number

interface add084 {
    (x: number, y: number): number
}
 */

 // 基本是一般的函数使用是一样的

function add085(x: number,y?:number){
    return y?x+y:x
}
console.log(add085(1))

function add086(x:number,y:number,z:number,q=1){
    return x+y+z+q
}
// 当第二个参数传undefind 时， y 的值是3
// console.log(add086(1,undefined,3)) 



// 函数重载
function add08(...rest:number[]):number
function add08(...rest:string[]):string
function add08(...rest:any[]):any{
    let first = rest[0]
    if(typeof first === 'string'){
        return rest.join('\n')
    }
    if(typeof first==='number'){
        return rest.reduce((prev, next)=>prev+next,0)
    }
}