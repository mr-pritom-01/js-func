function getSumOfArray(numbers){
    //  console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfArray(numbers){
     for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
        }
     }
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];

getOddNumbersOfArray(myNumbers);

getSumOfArray(myNumbers);