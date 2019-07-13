function reverseNumber (num) {
    let reverse = 0;
    while (num !== 0) {
        reverse *=10;
        reverse += num % 10;
        num -= num % 10;
        num /= 10;
    }
    return reverse;
}

console.log(reverseNumber(-123456789));