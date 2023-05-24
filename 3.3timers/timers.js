function countDown() {
    let myInterval = setInterval(countdown, 1000);
    function countdown() {
        if (x < 2) { 
            console.log("DONE!");
            clearInterval(myInterval);
            return;
        }
        else {
            x -= 1;
            console.log(x); 
        }
        
    }
}

countDown(x);

let counter = 0;
gameInterval = setInterval(randomGame, 1000)
function randomGame() {
    let random_num = Math.random();
    counter += 1;
    if (random_num > .75) {
        console.log(counter);
        clearInterval(gameInterval);
    }
}

