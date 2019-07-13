function formatTime(num) {
    num = Math.floor(num);
    let d = 1440;
    let h = d / 60;
    let m = 60;
    let days = Math.floor(num / d);
    let hours = Math.floor(num % h);
    let minutes = Math.floor(num % m);
    return (+days+'-day(s) '+hours+'-hour(s) '+minutes+'-minute(s) ');
}
console.log(formatTime(2880));