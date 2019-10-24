function printFibonacci() {
    let fib = [1,1];
    let a =parseInt(prompt("Nhập số mà bạn cần lấy làm mốc: "));
    let i =0;
    while (fib[i] + fib[i+1] <a){
        fib[i+2] = fib[i]+fib[i+1];
        i++;
    }
    document.write(fib);
}
printFibonacci();