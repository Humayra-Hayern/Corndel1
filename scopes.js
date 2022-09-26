let result = doWork(76);

console.log("result is " + result);

result = doWork(2);

console.log("result is " + result);

function doWork(workWith) {
 
    let x = 1 + workWith;
    if (x < 5) {
        x = doMoreWork(x);
    }  
    return x;  
}

function doMoreWork(workWith) {;
    let x = workWith * 5
    return x;
}
