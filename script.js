const h1 = document.getElementById("h1")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
let count = 0
stop.disabled = true
let timer;
function handleStart(){
    start.disabled = true
    stop.disabled = false
timer = setInterval(()=>{
    count++
        if(count===1001){
            count = 0
        }
        if(count < 10){
            h1.innerText = `0${count}`
        }
        else{
            h1.innerText = count
        }
}, 1000)
}

function handleStop(){
    stop.disabled = true
    start.disabled = false
    clearInterval(timer)
    count = 0
    h1.innerText = "00"
}


start.addEventListener("click", handleStart)
stop.addEventListener("click", handleStop)