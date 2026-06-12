const clock = document.querySelector('#clock')


setInterval(function(){
    let timestamp=new Date()
    clock.innerHTML=timestamp.toLocaleTimeString()
},1000)