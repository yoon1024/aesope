

var mapContainer = document.getElementById('map');

const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];
const branch_btns = document.querySelectorAll(".branch li");

let drag = true;
let zoom = true;




mapOption = {
    center: new kakao.maps.LatLng(37.5662952,126.9779451),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerOptions=[
    {
        title : "head office",
        latlng : new kakao.maps.LatLng(37.5231614,127.0363387),
        imgSrc : "",
        imgSize : new kakao.maps.Size(239,99),
        imgPos : {offset: new kakao.maps.Point(116,99)},
        button : branch_btns[0]
    
    },
    {
        title : "Garosu-gil",
        latlng : new kakao.maps.LatLng(37.5215405,127.0229205),
        imgSrc : "",
        imgSize : new kakao.maps.Size(239,99),
        imgPos : {offset: new kakao.maps.Point(116,99)},
        button : branch_btns[1]

    },
    {
        title : "Daegu",
        latlng : new kakao.maps.LatLng(35.8778124,128.6284527),
        imgSrc : ".png",
        imgSize : new kakao.maps.Size(239,99),
        imgPos : {offset: new kakao.maps.Point(116,99)},
        button : branch_btns[2]

    },
    {
        title : "Busan",
        latlng : new kakao.maps.LatLng(35.1631139,129.1635509),
        imgSrc : "",
        imgSize : new kakao.maps.Size(239,99),
        imgPos : {offset: new kakao.maps.Point(116,99)},
        button : branch_btns[3]

    }

];

for(let i=0; i<markerOptions.length; i++){
    new kakao.maps.Marker({
        map : map,
        position : markerOptions[i].latlng,
        title : markerOptions[i].title,
        image : new kakao.maps.MarkerImage(markerOptions[i].imgSrc,markerOptions[i].imgSize, markerOptions[i].imgPos)
    });
    markerOptions[i].button.onclick = (e)=>{
        e.preventDefault();

        for(let k=0; k<markerOptions.length; k++){
           markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");


        moveTo(markerOptions[i].latlng);
    }

}
window.onresize = ()=>{
    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");

    map.setCenter(markerOptions[active_index].latlng);
}


t_on.addEventListener("click",(e)=>{
    e.preventDefault();

    if(t_on.classList.contains("on")) return;

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_on.classList.add("on");
    t_off.classList.remove("on");
});

t_off.addEventListener("click",e=>{
    e.preventDefault();
    if(t_off.classList.contains("on")) return;

    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_off.classList.add("on");
    t_on.classList.remove("on");
})

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


setDraggable(drag);
function setDraggable(draggable){
    map.setDraggable(draggable);
}
setZoomable(zoom);
function setZoomable(zoomable){
    map.setZoomable(zoomable)
}



function moveTo(target){
   var moveLatLon = target;
    map.setCenter(moveLatLon);
}