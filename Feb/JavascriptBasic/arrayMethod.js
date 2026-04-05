//.............................************************......................................
//some(), find(), findIndex(), 

//some()...................................................
numericV = [12,13,14,15,16]
let fil2 = numericV.some(function(el){
    return el>12
})
console.log(fil2)  //return boolean valun

//find().....................................................

let fil3 = numericV.find(function(el){
    return el >14
})
console.log(fil3)

//FindIndex()..................................................

let fil4 = numericV.findIndex(function(el){
    return el == 15
})
console.log(fil4)

let fil5 = numericV.findIndex(function(el){
    return el > 15
})
console.log(fil5)

//filter......................................................

let employee = [
{
    EName:"John",
    Eid :2025
},{
    EName:"Ryne",
    Eid:2026
},{
    EName:"kiyansh",
    Eid:2027
}

]
let filterData = employee.filter(function(el){
    return el.EName =="Ryne"
})
console.log(filterData)

let filterData1 = employee.filter(function(el){
    return el.Eid==2027
})
console.log(filterData1)

numericV = [12,13,14,15,16]

let fil = numericV.every(function(el){
    return el>=14
})
console.log(fil)

//includes....................................................
let city = ['pune','nashik','latur','mumbai']
let city1 = city.includes('nashik')
console.log(city1)
//includes method return boolean value

//map............................................
let birth = [2004,2005,2007,2008]
let birthdate = birth.map(function(el,index,arr){
    return 2026-el
})
console.log(birthdate)

let num = [2,3,4,5,6,7]
let number = num.map(function(el){
    return el*2
})
console.log(number)