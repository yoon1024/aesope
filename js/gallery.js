//key : fc209af65c0a7e52e3ce3a2358041834

//url : https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

// rest : https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

//flickr.interestingness.getList

//passowrd : 6226e7c4405d4252


const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "ca74b70b0051720330ff8c2bef418cbf";
const per_page = 100;
const format = "json";

const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncllback=1`;


fetch(url)

.then(data=>{
    let result = data.json();
    return result;
})

.then(json=>{
    let items = json.photos.photo;
})
