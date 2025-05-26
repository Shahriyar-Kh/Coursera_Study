// Currency Conversion using FP

// create three variable in CamelCase
var currencyOne=100;
var exchangeCurrency=0;
var exchangeRate=1.2;

// create Function 
function convertCurrency(amount,rate){
    return amount*rate
}

//call the function with arguments
exchangeCurrency=convertCurrency(currencyOne,exchangeRate)
console.log("Converted Currency:", exchangeCurrency); // Add this line