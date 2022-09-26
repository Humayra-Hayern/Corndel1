let result = doWork(76);

console.log("result is " + result);


result = doWork(2); // breakpoint here 

console.log("result is " + result);

function doWork(workWith) {
 
    let x = 1 + workWith;
    if (x < 5) {
          setTimeout( function() { 
            x = doMoreWork(x);   // breakpoint here
            console.log("We did more work " + x);
            return x;
           }, 5000);
    }
    
    return x;
    
}

function doMoreWork(workWith) {;
    let x = workWith * 5
    return x;
}