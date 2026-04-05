//Oops - why we use design the class =====better class .....object ....properties  and method

//inheritance
// encapsulation
//abstraction
//polimorphism

class Student {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayInfo(){
        console.log(this.firstName + this.lastName)
    }
}

//playwrite

class Loginpage{
    constructor(page){
        this.page = page
        this.username = '#username';
        this.password = '#password';
        this.loginBtn = '#loginBtn'
    }
    async enterUserPasswordAndLogin(){

    await this.page.fill(this.username,'ram')
    await this.page.fill(this.password,'ram')
    await this.page.click(this.loginBtn)

    }

}

//Interitance 

class dashPage{
    constructor(page){
        this.page = page
    }
    async nevigate(url){
        await this.page.goto(url)
    }
}

// 

class Loginpage extends BasePage {
    constructor(page){
        super(page)
        this.username ='#username'
        this.password = '#password'
        this.loginBtn = '#loginBtn'
    }
    async enterUserPasswordAndLogin(user){
        await this.page.fill(this.username,'pooja')
        await this.page.fill(this.password,'pooja')
        await this.page.click(this.loginBtn)
    }
}

class Employee {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln 
    }
    displayEmp(){
        this.firstName = fn
        this.lastName = ln
    }
}
