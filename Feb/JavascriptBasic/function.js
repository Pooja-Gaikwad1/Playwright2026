//function - Function Declaration ,Function expression , arrow function

const { info } = require("console");

// function declaration

function sum (a,b){
    console.log(a+b);
    return a+b
}
//sum(1,2)
let a = sum(1,2)
console.log(a)

//.........................................................................

function divi(aa1,aa2){
    console.log(aa1/aa2)
    return aa1/aa2
}
let D = divi(400,2)
console.log(D)


//function expression 

let sub = function(x,y){
    return x - y
}
let B = sub(20,10)
console.log(B)

//...........................................................
let sub2 = function(aa2,aa3){
    return aa2-aa3
}
let D1= sub2(50,25)
console.log(D1)

// Arrow function 

let multi = (x1,y1)=>{
    return (x1*y1)
}
let mul = multi(2,4)
console.log(mul)

//one line arrow function 

let div = (m,n)=>m/n
let division = div(20,2)
console.log(division)

let sum1 = (a1,a2)=>a1+a2
let A = sum1(4,5)
console.log(A)

//Destructure

let array = [1,2,3,5]
console.log(array[0])
console.log(array[3])

let [p1,p2,p3] = array
console.log(p1)

let string = ['pooja','aarav','aarav']
let [pg,ag,ag2]= string
console.log(ag)
console.log(pg)

let arr1 = [200,300,400]
let arr2 = [500,600,700]

let arr3 = [...arr1,...arr2]
console.log(arr3)

let arA = [9,8,7,6]
let arB = [5,4,3,2]
let arC = [...arA,...arB]
console.log(arC)

let num = [1,2,3,4,5,6,7]

let number = [a,...b] = num
console.log(number)

//Object ....................................................

let File1 = {
    firstName: "pooja",
    lastName :"Gaikwad",
    age :33,
    city :"odisha"

}
console.log(File1)

// let {firstName,lastName} = File1
// console.log(firstName)
// console.log(lastName)

let {firstName , lastName, ...obj} = File1
console.log(firstName)
console.log(lastName)
console.log(obj)



let file2 = {
    fName: "Pratiksha",
    lName : "Bhosale",
    eId :3002,
    city:"Delhi"
}

function displayInfo({eId,city}){
    console.log(eId)
    console.log(city)
}
displayInfo(file2)


let file3 = {
    eName : "john",
    eLastName: "justine",
    eid: 20003,
    esalary :"30000"
}

function EmpInfo({eName,esalary}){
    console.log(eName)
    console.log(esalary)
}
EmpInfo(file3)


names = ['ram','shyam,radha']

function nameinfo(a,...b){
    console.log(a)
    console.log(b)
}
nameinfo(...names)