//if condition
if(true)
    {
        console.log("if block is executing");
    }

    //if-else
    if(false){
            console.log("true block");
         }else{
             console.log("false block");
         }
    
         //ternary condition
        isAdult=2077
         isAdult >= 18 ?console.log("Major"):console.log("Minor");

         //else-if condition
    let day = prompt("Enter a day value");
if(day == 1){
    console.log("Sun");
}else if(day == 2){
    console.log("Mon");
}else if(day == 3){
    console.log("Tue");
}else if(day == 4){
    console.log("Wed");5
}else if(day == 5){
    console.log("Thu");
}else if(day == 6){
    console.log("Fri");
}else if(day == 7){
    console.log("Sat");
}
else{
    console.log("Invalid day");
}

//switch
let Day = Number(prompt("Enter a day value"));
 console.log(day , typeof(day));
 switch (day) {
     case 1:
         console.log("Sun");
        case 3:
         console.log("Tue");
         break;
        case 4:
         console.log("Wed");
         break;
         case 5:
         console.log("Thu");
         break;
         case 6:
         console.log("Fri");
         break;
         case 7:
         console.log("Sat");
         break;
 

     default:console.log("Invalid day");
         break;
         
 }
