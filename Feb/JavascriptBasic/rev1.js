const { type } = require("os")

let x = 10 
console.log(x)

let y = 20 
console.log(y)

// let and const block scope 

{
    let x1 = 1
    console.log(x1)
    x1 = 2
    console.log(x1)

}

// {
//     const y1 = 2
//     console.log(y1)
//      y1 = 3
//      console.log(y1)
    
// }

let a = 10
console.log(typeof a)

let b = 'pooja'
console.log(typeof b)

let c = false
console.log(typeof c)

let d = NaN
console.log(typeof d)

let e = ['a','b','c']
console.log(typeof e)

let f = {
    name :"pooja",
    lastName :'Gaikwad'
}
console.log(typeof f)