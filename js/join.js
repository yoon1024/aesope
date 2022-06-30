const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

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

