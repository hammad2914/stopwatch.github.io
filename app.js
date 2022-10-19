var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hour = document.getElementById("hrs")
var minute = document.getElementById("mins")
var second = document.getElementById("sec")
var msecond = document.getElementById("msec")

var btn = document.getElementById("start")
var stopbtn = document.getElementById("stop")
var resetbtn = document.getElementById("reset")

var interval;

function timer(){
    msec++
    msecond.innerHTML=msec;
    if(msec >= 99){
        sec++
        second.innerHTML=sec;
        msec= 0;
    }
    else if(sec >=60){
        min++
        minute.innerHTML=min
        sec=0;
    }
    else if(min >=60){
        hrs++
        hour.innerHTML=hrs
        min=0;
    }
}

function start(){
    interval= setInterval(timer,10)
    
    
    btn.disabled = true
    stopbtn.disabled = false
    resetbtn.disabled = false

}

function stop(){
    clearInterval(interval);

    btn.disabled = false
    stopbtn.disabled = true
    resetbtn.disabled = false

}

function reset(){
    hrs = 00
    min = 00
    sec = 00
    msec = 00

    hour.innerHTML=hrs
    minute.innerHTML=min
    second.innerHTML=sec
    msecond.innerHTML=msec

    clearInterval(interval);

    btn.disabled = false
    stopbtn.disabled = true
    resetbtn.disabled = true
}


