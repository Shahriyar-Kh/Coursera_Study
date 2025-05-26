function fib(n) {
    //Step1 Base Cases
    if (n === 0) {
        return 0;
    }
    if (n === 1){
        return 1;
    }
    
    // Recursive Case
    return fib(n - 1) + fib(n - 2)
}
 // Test Cases For above function

 //Test case 1
console.log(fib(1)) // Expexted Output :1
 
//Test case 2
console.log(fib(10)) //Expexted Output : 55