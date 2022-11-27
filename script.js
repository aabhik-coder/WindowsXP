
function check(){
let code= document.querySelector("#Scode")
let enter= document.querySelector(".enter")


if(code.value=="hello"){
    document.querySelector("#content").innerHTML="Correct!Welcome!! "
    document.querySelector("#content").style.color="green"
    document.querySelector("input").style.borderColor="green"
    setTimeout(function(){ window.location="mainpage.html" }, 1000);
    
}
else{
    document.querySelector("#content").style.color="red"
    document.querySelector("#content").innerHTML="Incorrect Code Try again"
    document.querySelector("input").style.borderColor="red"
    setTimeout(function(){ enter.setAttribute('style', 'animation: horizontal-shaking 500ms linear;') }, 2);
    
    
}
enter.setAttribute('style', 'animation:none')
}

