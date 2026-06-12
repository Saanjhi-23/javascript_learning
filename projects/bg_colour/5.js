const bg_change = function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const colour= `rgb(${r}, ${g}, ${b})`
    const body = document.querySelector('body')
    body.style.backgroundColor=colour
}
let a;
const start = document.getElementById('start')
start.addEventListener('click',function(){
    a= setInterval(bg_change,1000)
})

const stop = document.getElementById('stop')
stop.addEventListener('click',function(){
    clearInterval(a)
    
})