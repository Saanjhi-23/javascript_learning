const buttons = document.querySelector(".button")
const body=document.querySelector("body")
buttons.forEach(function (button){
    console.log(button);
    button.addEventListenser('click' , function(E){
        console.log(E)
        console.log(E.target);
        if(E.target.id=='grey'){
            body.style.backgroundColor=E.target.id
        }
        if(E.target.id=='white'){
            body.style.backgroundColor=E.target.id
        }
        if(E.target.id=='blue'){
            body.style.backgroundColor=E.target.id
        }
        if(E.target.id=='yellow'){
            body.style.backgroundColor=E.target.id
        }
    })
})