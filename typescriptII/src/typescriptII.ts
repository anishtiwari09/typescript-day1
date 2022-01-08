
//*1 string
let str:string  //explicit
str="hello"
let str2="hello" //implicit



//*2 Number
let age:number
let age2=2

//*3 boolean
let isFetching:boolean
let isFetching2=false

//4* array

let arr1:number[]=[1,2,3]
arr1.push(3)


var arr2:Array<string>
arr2=["1","hello"]

//5* tuple
let tupl:[string,boolean]
tupl=["abcd",false]

enum UsersType{
user,
superUsers,
admin=5,
superAdmin
}
console.log(UsersType.superAdmin)

//*6 function



function product(a:number,b:number):number{
    return a*b
}
function divide(a:number,b:number):number{
    return a/b
}

function printName(name:string):void{
    console.log(name)
}
console.log(product(3,2)) 