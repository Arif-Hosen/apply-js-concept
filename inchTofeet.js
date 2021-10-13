// inch to foot 
function inchesToFoot(inches) {
    var foot = inches / 12;
    return foot;
}
var myInches = 60;
var foot = inchesToFoot(myInches);
console.log('my inches to foot is ', foot, 'foot');

var naniInches = 66;
var foot = inchesToFoot(naniInches);
console.log('nani inches to foot is ', foot);

// kilometer to miles
function kilometerToMiles(kilometers) {
    var miles = kilometers / 1.60934;
    return miles;
}
var kilo = 5;
var miles = kilometerToMiles(kilo);
console.log('miles=', miles);

//  miles to kilometer 
function milesTokm(miles) {
    var km = miles * 1.60934;
    return km;
}
var mile = 5;
var kilometer = milesTokm(mile);
console.log('km=', kilometer);