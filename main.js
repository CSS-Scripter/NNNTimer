window.onload = function() {
    console.log('Hello World')

    const title = document.getElementById('title')

    var targetTime;

    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    if (month == 11) {
        title.innerHTML = "Time left till you can nut again!"
        targetTime = new Date(`${year}.12.01`).getTime() / 1000
        
    } else {
        title.innerHTML = "Time left till No Nut November starts!"
        if (month < 11) {
            targetTime = new Date(`${year}.11.01`).getTime() / 1000
        } else {
            targetTime = new Date(`${year+1}.11.01`).getTime() / 1000
        }
    }

    var flipdown = new FlipDown(targetTime, "flipdown", {
        theme: 'light'
    });
    flipdown.start();

    
}