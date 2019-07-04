// Your code goes here
let a = +prompt('Length A :', '');
let b = +prompt('Length B :', '');
let c = +prompt('Lenght C :', '');
let correct = b + c > a || a + c > b || a + b > c;

if (correct) {
    if (a === b && b === c && c === a) {
        console.log('Eequivalent triangle');
    } else if (a === b || b === c || c === b) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}
