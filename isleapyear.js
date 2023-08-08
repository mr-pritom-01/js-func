function isLeapyear(year) {
    const remainder = year % 4;
    if(remainder == 0){
        console.log('Yes, It is a Leap Year', year)
    }
    else {
        console.log('Ops, It is not a Leap Year', year)
    }
}
isLeapyear(2022);
isLeapyear(2024);
isLeapyear(2020);