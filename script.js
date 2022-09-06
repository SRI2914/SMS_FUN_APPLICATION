let charcount=100;
let smsAppfun=()=>{
    let textEnteredLength=document.querySelector("#text-area").value.length;
    console.log(textEnteredLength);
    let remchar=charcount-textEnteredLength;
    console.log(remchar);
    let spantag=document.querySelector("#rem_char");
    spantag.innerHTML=remchar
}

// show password

let changePassword=()=>{
let pbox=document.querySelector('#pass-box')
let typeofInput=pbox.getAttribute("type");
console.log(typeofInput);

// Logic

if(typeofInput==="password"){
    pbox.setAttribute("type","text");
}
}