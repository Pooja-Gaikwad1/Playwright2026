let info = {
    firstName : "Pooja",
    lastName : "Gaikwad",
    city : 'Bhubaneswar'
}

//Retrive (dot notation bracket notation)

console.log(info.firstName)
console.log(info['firstName'])

//Update

info.firstName = "Amar"
info['firstName'] = 'Amar'
console.log(info)

// Add

info.language = "Marathi"
console.log(info)
info['age']=20
console.log(info)

//Delete 

delete info.age
delete info['language']
console.log(info)

console.log(Object.keys(info))
console.log(Object.values(info))

let obj = Object.assign(info,{age:'01'})
console.log(obj)

detail = {
    Fname : 'Vihaan',
    Lname : 'Kolsure',
    exp: 1
};
Object.freeze(detail)
detail.exp1 = 2
console.log(detail)

//...................................................................

let info22 ={
    fn : "kamal",
    ln : "Bhosale",
    age : 40,
    exp : 2

}
Object.keys(info22) // [fn, ln, age, exp]
Object.values(info22) // [kamal,bhosale,40,2]
Object.entries(info22)

let address = {
    city : "mumbai",
    country :"India"
}

let obj3 = Object.assign(info22,address)
console.log(obj3)

// six eight 

Object.assign(obj3)

let obj4 = {
    fn :"Sudhakar",
    ln :"Bhosale",
    age: 50,
    exp : 5
}

let q1 = Object.hasOwn(obj4,fn)
let q2 = Object.hasOwn(obj4,ln)

console.log(q1)
console.log(q2)

let q3 = obj4.hasOwnProperty('fn')
let q4 = obj4.hasOwnProperty('ln')

number('123')
parseFloat('10.20')
parseInt('10.20')