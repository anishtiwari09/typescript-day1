
//*1
interface Obj{
    titile:string,
    status:boolean,
    id:number;
}

//*2
interface FullName{
    firstName:string,
    lastName?:string
}
const getName=({firstName,lastName}:FullName):string=>{
if(!lastName)
return firstName
    return firstName + " " + lastName
}
console.log(getName({firstName:"anish",lastName:"tiwari"}))

//*3

interface Address{
    houseNumber:string;
    street:string;
    city:string,
    state:string,
    postalCode:number,
    country:string;
}

//*4
interface PersonDetails{
prefix?:string,
mobile:number[];
address:string[];
email?:string,
firstName:string,
lastName:string,
middleName?:string
}

//*6

let persons:PersonDetails[]=[]


function phoneBook(details:PersonDetails):void{
persons.push(details)
}
phoneBook({firstName:"abc",lastName:"cdde",mobile:[1,23,],address:["bangalore"]})
console.log("persion",persons)