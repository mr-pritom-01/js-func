// console.log(4/2);
// console.log(24/2);
// console.log(45/2);
// console.log(74/2);
// console.log(41/2);
// console.log(78/2); 

function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder == 0){
        // console.log('number is even');
        return true;
    }
    else {
        // console.log('number is odd');
        return false;
    }
}

const myNumbrerIsEven = isEven(303);
console.log(myNumbrerIsEven);

const herNumbrerIsisEven = isEven(1280);
console.log(herNumbrerIsisEven);
