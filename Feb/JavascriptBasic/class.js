// class ======= class is user defined datatype
// class ======= Object =======properties and methods

class Person{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    DisplayName(){
        console.log(this.firstName + ' '+this.lastName)
    }
}

let  A = new Person('Pooja','Gaikwad')
console.log(A)
A.DisplayName()

let B = new Person('Pratiksha','Bhosale')
console.log(B)
B.DisplayName()


class School{

    constructor(studFn,studLn,studId){
        this.studentFirstName =studFn
        this.studentLastName = studLn
        this.studentId = studId
    }
    displayInfo(){

        console.log( this.studentFirstName+' '+this.studentLastName+ ' '+this.studentId)

    }
}
let Aarav = new School('Aarav','Gaikwad','04')
console.log(Aarav)
Aarav.displayInfo()

let Amar = new School('Amar','Gaikwad','06')
console.log(Amar)
Amar.displayInfo()

//..............................................................................................

class Patient{
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln
        this.age = age
    }

    displayDetail(){
        console.log(this.firstName+ ' '+this.lastName+ ' '+this.age)
    }
}

let AA = new Patient('Ankita','Rathod', 35)
let BB = new Patient('Ankita','Rathod', 35)
let CC = new Patient('Ankita','Rathod', 35)
console.log(AA)
console.log(BB)
console.log(CC)
//AA.displayDetail()

let patient = [AA,BB,CC]
console.log(patient)


// patient.forEach(function(el){
//     el[skill] =='playwrite'
// })
