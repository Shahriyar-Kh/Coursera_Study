var age =-1;
if (age >=65 ){
    console.log("You get Your income from your pension.");
}
else if (age >=18 && age <65 ){
    console.log("Each month you get salary.");
}
else if (age >0 && age <18 ){
    console.log("You get an allowance");
}
else{
    console.log("The Value of the age variable is not numerical.");
}


console.log("++++++++++++++++++++++++++++++++ Switch Statments +++++++++++++++++++++++++++++")
// Switch Statments
var day="Monday";
switch(day){
    case "Monday":
        console.log("Monday Work on js");
        break;

    case "Tuesday":
        console.log("Tuesday work on python");
        break;
    case "Wednesday":
        console.log("Wednesday work on React")
    default:
        console.log("No day for working.");

}