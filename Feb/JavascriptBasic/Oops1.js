// same class same method name different signature - overloading
// different same method name , same signature - overriding
// duck typing 

// poly  - many  morphism --- forms  --- of same thing

// overloading 

class calculater{
    addition(x,y){
        console.log(x+y)
    }
    addition1(x,y,z){
        console.log(x+y+z)
    }
    addition2(x,y,z,a){
        console.log(x+y+z+a)
    }
}
let A = new calculater()
A.addition(10,20)
A.addition1(10,20,30)
A.addition2(10,20,30,40)

class Total{
    sum(a=undefined, b=undefined, c=undefined,d=undefined){
        if(a != undefined && b!=undefined && c!=undefined, d!=undefined){
            console.log(a+b+c+d)
        }else if(a != undefined && b!=undefined && c!=undefined){
            console.log(a+b+c)
        }else if(a!=undefined && b!=undefined){
            console.log(a+b)
        }
    }
}
let Z = new Total()
Z.sum(1,2)
Z.sum(1,2,3)
Z.sum(1,2,3,4)



//Overriding

class IndiaBank{
save(){
    console.log('I am save from IndiaBank')
}
loan(){
    console.log('I am loan from IndiaBank')
}
}

class HDFC extends IndiaBank{
    bankName(){
        console.log('I am HDFC bank')
    }
    save(){
    console.log('I am save from HDFC')
}
    loan(){
    console.log('I am loan from HDFC')
}
}

let Bank = new HDFC()
Bank.bankName()
Bank.loan()
Bank.save()


//duck typing....................................................................................

class Human {
    talk(){
        console.log('Can talk')
    }
}
class Dog{
    talk(){
        console.log('Bhow Bhow')
    }
}
class Duck{
    talk(){
        console.log('quack quack')
    }
}

function call_talk(obj){
    obj.talk()
}


let a = new Human()
let b = new Dog()
let c = new Duck()
console.log(a)

call_talk(a)
call_talk(b)
call_talk(c)

