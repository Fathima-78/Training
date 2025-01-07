//if-else
let Number1=Number(prompt("Enter the numbers: "))
let Number2=Number(prompt("Enter the numbers: "))
let Number3=Number(prompt("Enter the numbers: "))
if(Number1>Number2&&Number1>Number3){
    console.log(`${Number1}is the greatest Number`)//When you need to embed a variable or expression directly into a string, you use the syntax ${expression} inside backticks.
}else if(Number2>Number1&&Number2>Number3){
    console.log(`${Number2} is the greatest Number`)
}else if(Number3>Number1&&Number3>Number2){
    console.log(`${Number3} is the greatest Number`)
}

//switch 
let Numbera=Number(prompt("Enter the numbers: "))
let Numberb=Number(prompt("Enter the numbers: "))
let Numberc=Number(prompt("Enter the numbers: "))
switch(true){
    case 1:(Numbera>Numberb&&Numbera>Numberc)
    console.log(`${Number1}is the greatest Number`)
    break;
    case 2:(Numberb>Numbera&&Numberb>Numberc)
    console.log(`${Number2} is the greatest Number`)
    break;
    case 3:(Numberc>Numbera&&Numberc>Numberb)
    console.log(`${Number3} is the greatest Number`)
    break;
    Default:
    console.log("All numbers are equal")



}
