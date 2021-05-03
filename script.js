// const msg = document.querySelector("#msg")
// window.onload = setTimeout(function(){
//     msg.style.left = "-100%";
//     msg.style.transition = '0.5s ease-in-out'
// }, 2000)
    
   
let fechar = document.querySelector("[data-fechar]")
let seta = document.querySelector("#abrir")
let btn = document.querySelector("#fechar")

fechar.onclick = ()=>{
    btn.classList.add('fchr')
    seta.classList.remove('fchr')
}
seta.onclick = ()=>{
    btn.classList.remove('fchr')
    seta.classList.add('fchr')
}

  