let btn = document.querySelector("button");
function getColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')
}
btn.addEventListener("click",()=>{
    let randomColor=getColor();
    document.body.style.backgroundColor=randomColor;
    document.querySelector('p').innerText=`Color is ${randomColor}`
})