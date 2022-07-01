const product = document.querySelector("#product");
const wrap = product.querySelector(".wrap");
const article = product.querySelectorAll(".wrap article");
const prev = product.querySelector(".prev");
const next = product.querySelector(".next");


const brand = document.querySelector("#brand");
const panel = brand.querySelector(".panel");
const btns = brand.querySelectorAll(".wrap .btns li"); 



wrap.style.left = "-33.333%"

prev.addEventListener("click",(e)=>{
    e.preventDefault();


        new Anim(wrap,{
            prop : 'left',
            value : "0%",
            duration : 700,
            callback :()=>{
                wrap.style.left = "-33.333%";
                wrap.prepend(wrap.lastElementChild);
            }
        })


    
})


next.addEventListener("click",(e)=>{
    e.preventDefault();

    new Anim(wrap,{
        prop : 'left',
        value : "-66.666%",
        duration : 700,
        callback :()=>{
            wrap.style.left = "-33.333%";
            wrap.append(wrap.firstElementChild);
        }
    })


})


btns.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();

        panel.style.marginLeft = -100 * [index] + "%";
    
        btns.forEach((el)=>{
        el.classList.remove("on");})

        el.classList.add("on");

    })
})