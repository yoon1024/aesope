//key : fc209af65c0a7e52e3ce3a2358041834

//url : https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

// rest : https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

//flickr.interestingness.getList

//passowrd : 6226e7c4405d4252

//flickr.photos.search

const header = document.querySelector("#header_sub_gallery");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");



const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "ca74b70b0051720330ff8c2bef418cbf";
const per_page = 30;
const format = "json";

const url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=beige&privacy_filter=1`;

const frame = document.querySelector("#list");
const loading = document.querySelector(".loading");

const input = document.querySelector("#search");
const btn = document.querySelector(".btnSearch")

btnCall.addEventListener("click",(e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");

})

createList(url);

btn.addEventListener("click",()=>{

    let tag = input.value;
    const urlsearch = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`
    createList(urlsearch)

})




function createList(url){
    fetch(url)

.then(data=>{
    let result = data.json(url);
    return result;
})

.then(json=>{
    let items = json.photos.photo;


    htmls = '';

    items.map((data)=>{
        console.log(data)

        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls += `
            <li class="item">
                <div><a href="${imgSrcBig}">
                    <img src="${imgSrc}" alt="">
                    </a>
                    <p>${data.title}</p>
                </div>
            </li>
        `
    })
    frame.innerHTML = htmls;

    const imgs = frame.querySelectorAll("img")

    const len = imgs.length;

    let count = 0;

    for(let el of imgs){
        el.onload = ()=>{

            count++;
            if(count === len) isoLayout();
        }

        el.onerror = (e)=>{
            e.currentTarget.closest(".item").style.diplay = "none";
        }
    }
})

}



function isoLayout(){

    frame.classList.add("on");
    loading.classList.add("off");

    new Isotope("#list",{
        itemSelector : ".item",
        columWidth : ".item",
        transitionDuration : "0.5s"
    });

}
