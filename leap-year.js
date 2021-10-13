// Leap Year check
function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const year1 = 2222;
const LeapYear1 = isLeapYear(year1);
console.log("Is leap year:", LeapYear1);

const year2 = 2020;
const LeapYear2 = isLeapYear(year2);
console.log("Is leap year:", LeapYear2);