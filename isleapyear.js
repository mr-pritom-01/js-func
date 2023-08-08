function isLeapyear(year) {
    const remainder = year % 4;
    if(remainder == 0){
        // console.log('Yes, It is a Leap Year', year)
        return true;
    }
    else {
        // console.log('Ops, It is not a Leap Year', year)
        return false;
    }
}

const isMyYearIsLeapYear = isLeapyear(2022);
console.log('my year:', isMyYearIsLeapYear)

const isHerYearIsLeapyear = isLeapyear(2024);
console.log('her year:', isHerYearIsLeapyear)