// key : AIzaSyB07SmnE1cJMVJRKCZmg_kaotLyw9z0IiE

// playlist : PL4LRIdOIlx_9Cuw8pXYxkzIEULm8wNhO-

const header = document.querySelector("#header_sub_youtube");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");

const vidList = document.querySelector(".vidList");

const key = "AIzaSyB07SmnE1cJMVJRKCZmg_kaotLyw9z0IiE";
const playlistId = "PL4LRIdOIlx_9Cuw8pXYxkzIEULm8wNhO-";
const num = 7;

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;


btnCall.addEventListener("click",(e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");

})

fetch(url)

.then((data)=>{
    return data.json();
})

.then((json)=>{
    let items = json.items;
    console.log(items);
    let result = '';

    items.map((item)=>{

        let title = item.snippet.title;
        if(title.length > 30){
            title = title.substr(0,30) + "...";
        }
        let con = item.snippet.description;
        if(con.length > 180){
            con = con.substr(0,180) + "...";
        }
        let date = item.snippet.publishedAt;
        date = date.split("T")[0];
        
        result +=`
            <article>
                <a href="${item.snippet.resourceId.videoId}" class="pic">
                    <div></div><div></div><div></div><div></div>
                    <img src="${item.snippet.thumbnails.medium.url}" alt="">
                    <p>view more</p>
                </a>
                <div class="con">
                    <h2>${title}</h2>
                    <p>${con}</p>
                    <span>${date}</span>
                </div>
            </article>
            
        `
    })
    vidList.innerHTML = result;
});

vidList.addEventListener("click",(e)=>{
    e.preventDefault();


    if(!e.target.closest("a")) return;

    const vidId =e.target.closest("a").getAttribute("href");

    let pop = document.createElement("figure");
    pop.classList.add("pop");

    pop.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${vidId}"frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
                    <span class="btnClose"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
    `;

    vidList.append(pop);
});




vidList.addEventListener("click",(e)=>{
    const pop = vidList.querySelector(".pop");
    //if 괄호 안에는 불린 값이 와야 되는데 밑에처럼 pop 이런 식으로 쓰면 그냥 pop이 있냐 없냐를 물어보는 것
    if(pop){
        const close = pop.querySelector("span i");
        if(e.target == close) pop.remove();
    }

})

