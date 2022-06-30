// key : AIzaSyB07SmnE1cJMVJRKCZmg_kaotLyw9z0IiE

// playlist : PL4LRIdOIlx_9Cuw8pXYxkzIEULm8wNhO-

const vidList = document.querySelector(".vidList");

const key = "AIzaSyB07SmnE1cJMVJRKCZmg_kaotLyw9z0IiE";
const playlistId = "PL4LRIdOIlx_9Cuw8pXYxkzIEULm8wNhO-";
const num = 7;

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

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
        let con = item.snippet.description;
        let date = item.snippet.publishedAt;
        
        result +=`
            <article>
                <a href="${item.snippet.resourceId.videoId}" class="pic">
                    <img src="${item.snippet.thumbnails.medium.url}" alt="">
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
                    <span class="btnClose">close</span>
    `;

    vidList.append(pop);
});




vidList.addEventListener("click",(e)=>{
    const pop = vidList.querySelector(".pop");
    //if 괄호 안에는 불린 값이 와야 되는데 밑에처럼 pop 이런 식으로 쓰면 그냥 pop이 있냐 없냐를 물어보는 것
    if(pop){
        const close = pop.querySelector("span");
        if(e.target == close) pop.remove();
    }

})

