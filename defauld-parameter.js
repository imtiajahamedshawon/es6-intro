function add(num1, num2 = 33){
    // option 1
    // if(num2 == undefined){
    //     num2 = 0;
    
    // }

    // // option 2
    // num2 = num2

    total = num1 + num2;
    return total;
}
const result = add(15, 0);
console.log(result);