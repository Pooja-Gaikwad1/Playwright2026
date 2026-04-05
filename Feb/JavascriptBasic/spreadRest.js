let names = ['pooja','priti','pratiksha','aarav','vihaan']
let arr = [...names]
console.log(arr)

arr.push('amar')
console.log(arr)

let a = [1,2,3,4]
let b = [9,8,7,6]
let num = [...a,...b]
console.log(num)

let arr1 = [...'hello']
console.log(arr1)

let user = {
    name :'Pooja',
    id :20
}
let user1 = user
console.log(user1)

user1['name']= 'pratiksha' 
console.log(user1)
console.log(user)