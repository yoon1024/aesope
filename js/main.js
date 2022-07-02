const product = document.querySelector("#product");
const wrap = product.querySelector(".wrap");
const article = product.querySelectorAll(".wrap article");
const prev = product.querySelector(".prev");
const next = product.querySelector(".next");


const brand = document.querySelector("#brand");
const panel = brand.querySelector(".panel");
const btns = brand.querySelectorAll(".wrap .btns li"); 



const banner = document.querySelector("#banner");
const slides = banner.querySelector(".slides");
const bp = banner.querySelector(".prev");
const bn = banner.querySelector(".next");

slides.style.left = "-100%"

bp.addEventListener("click",(e)=>{
    e.preventDefault();
        new Anim(slides,{
            prop : 'left',
            value : "0%",
            duration : 1000,
            callback :()=>{
                slides.style.left = "-100%";
                slides.prepend(slides.lastElementChild);
            }
        }) 
})


bn.addEventListener("click",(e)=>{
    e.preventDefault();
    new Anim(slides,{
        prop : 'left',
        value : "-200%",
        duration : 1000,
        callback :()=>{
            slides.style.left = "-100%";
            slides.append(slides.firstElementChild);
        }
    })
})



//메인페이지 #product 슬라이드
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



//메인페이지 brand 슬라이드
btns.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();

        panel.style.marginLeft = -100 * [index] + "%";
    
        btns.forEach((el)=>{
        el.classList.remove("on");})
        el.classList.add("on");
    })
})




