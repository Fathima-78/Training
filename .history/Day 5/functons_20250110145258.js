//funtion or named function
// function demo(){
//     console.log("Function testing....")
// }demo();

//anonymous function
/*function (){
    console.log("Anonymous Function testing....")
}*/
//function expression
// let x=function(){
//     console.log("Anonymous Function testing....")
// };
// x();
//IIFE
// (function(){
//         console.log("IIFE Function testing....")
//     })();
//Arrow function
// let x=_=>console.log("Arrow function testing")
// x()


//Assignment:
// for(let i=1;i<=5&&i==3;i++){
//     for (let j=1;j==1&&j<=5;j++){
//         document.writeln("*")
//     }
    
// }
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        // Print '*' for the first row (horizontal part of T)
        // Or for the middle column (vertical part of T)
        if (i == 1 || j == 3) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;&nbsp");
        }
    }
    document.writeln(); // Move to the next line after each row
}

