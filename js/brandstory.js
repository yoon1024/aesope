const header = document.querySelector("#header_sub_brandstory");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");


btnCall.addEventListener("click",(e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");

})