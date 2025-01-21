let userData={
    name:"Fathima",
    city:"Anantapur",
    State:"AP"
}
console.log(userData,typeof(userData))

let x=JSON.stringify(userData);
console.log(x,typeof(x))

let y=JSON.parse(x);
console.log(y)