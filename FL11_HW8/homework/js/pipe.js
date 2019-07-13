function pipe() {
    let num = arguments[0];
    for (let i=1; i<arguments.length; i++) {
        num = arguments[i](num);
    }
    return num;
}

function addOne(x) {
    return x + 1;
}

console.log(pipe(1,addOne,addOne));