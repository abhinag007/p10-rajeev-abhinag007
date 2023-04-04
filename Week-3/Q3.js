function createIncrement() {
    let count = 0;
    function increment() {
    count++;
    }
    let message = `Count is ${count}`;
    function log() {
    console.log(message);
    }
    return [increment, log];
    }
    const [increment, log] = createIncrement();
    increment();
    increment();
    increment();
    log();

/* Answer */


/* 1) Here the output is "Count is 0" because when createIncrement() is called it initializes the count with 0
and message variable save the value "count is 0" even if we increase the cuount we dont re initialoze
message variable. */


/* 2) Here log is a function which is used to display our message variable */