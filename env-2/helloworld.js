var message='hello world';

function printMsg() {
    console.log('inside printMsg');
}

printMsg();

console.log(message)

function wait() {
    var time = 3000 + new Date().getTime();
    while(new Date() < time){}
    console.log('finished 3 secs')
    wait6()
}

function wait6() {
    var time = 6000 + new Date().getTime();
    while(new Date() < time){}
    console.log('finished 6 secs')
}

document.addEventListener('click', ()=> {
    //this function will get executed only when all the remaining functions are executed and the stact is empty.
    console.log('clicked')
})

wait();
console.log('end of program.')