// array
let arrtype1: number[] = []
let arrtype2: Array<number> = []
let arrtype3: Array<string | number> = []

// tuple  不能越界访问
let tupletype: [number, string] = [0, '2']

// function
//1
let addtype = (x: number, y: number): number => x + y
//2
let compute: (x: number, y: number) => number = (x, y) => x + y

// compute =

// object
let objtype: { x: number, y: number } = { x: 1, y: 2 }

// symbol
let s1type: symbol = Symbol()
let s2type: symbol = Symbol()
console.log(s1type === s2type)

// undefined , null
let untype: undefined = undefined
let untype2: null = null
let numtyoes: number | undefined | null = null


// void
let noReturn = () => { }

// any
let a

// never


