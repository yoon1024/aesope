const header = document.querySelector("#header_sub_join");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");

const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");


btnCall.addEventListener("click",(e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");

})


btnSubmit.addEventListener("click",(e)=>{
    if(!istxt("userid", 5)) e.preventDefault();

});


function istxt(name, len){
    if(len === undefined) len = 5;

    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(txt.length >= len){
        

        const errMsgs = input.closest("td").querySelectorAll('p');

        if(errMsgs.length > 0) input.closest("td").querySelector('p').remove();
        return true;
    }else{


        const errMsgs = input.closest("td").querySelectorAll('p');

        if(errMsgs.length > 0) input.closest("td").querySelector('p').remove();
        
        const errMsg = document.createElement('p');
        errMsg.append(`입력항목을 ${len}글자 이상 입력하세요`);
        input.closest('td').append(errMsg);

        return false;
    }
}

const pwd1 = form.getElementById("pwd1");
const pwd2 = form.getElementById("pwd2");

if(pwd1.value==""){
    alert("비밀번호를 입력하세요");
    pwd1.focus();
    return false;
    
    }else if(pwd2.value==""){
    alert("비밀번호확인을 입력하세요");
    pwd2.focus();
    return false;}

    
if(pwd1.value!=pwd2.value){

    alert("입력한 2개의 비밀번호가 일치하지 않습니다.");
    pwd1.focus();
    return false;
    
    }
