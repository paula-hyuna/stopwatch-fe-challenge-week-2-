var startBtn = document.getElementById('startPause');
var resetBtn = document.getElementById('reset');
var time = document.getElementById('time');
var milsec = 0;
var sec = 0;
var timer;

startBtn.textContent = 'Start';
time.textContent = '00:00';

startBtn.addEventListener('click', function() {
    if(startBtn.textContent == 'Start'){
        startBtn.textContent = 'Pause';
        timer = window.setInterval(incrementTimer, 10);
    }
    else {
        startBtn.textContent = 'Start';
        clearTimeout(timer);
    }
})

resetBtn.addEventListener('click', function() {
    clearTimeout(timer);
    sec = 0;
    milisec = 0;
    if(startBtn.textContent == 'Pause'){
        startBtn.textContent = 'Start';
    }
    time.textContent = '00:00';
    
})

function needsPadding(num) {
    if(num < 10){
        return num.toString().padStart(2, '0'); 
    }
    else{
        return num.toString();
    }
}

function incrementTimer() {
    
    if(milsec < 100) {
        milsec++;
        time.textContent = needsPadding(sec) + ':' + needsPadding(milsec);
    }
    else{
        sec++;
        milsec = 0;
        time.textContent = needsPadding(sec) + ':' + milsec.toString().padStart(1, '0');
    }
    
}