var like = document.getElementById("btnl1");
like.addEventListener('click',aimer);
function aimer(){
    if(like.style.color == "red"){
        like.style.color ="grey"
    }else{
        like.firstElementChild.setAttribute("class","fa-solid fa-heart");
        like.style.color="red"
    }
}

var like2 = document.getElementById("btnl2");
like2.addEventListener('click',aimer2);
function aimer2(){
    if(like2.style.color == "red"){
        like2.style.color ="grey"
    }else{
        like2.firstElementChild.setAttribute("class","fa-solid fa-heart");
        like2.style.color="red"
    }
}
// bouton plus et moins
var btnplus= document.getElementById("l2");
var btnmoin= document.getElementById("l1");
var btnsup= document.querySelectorAll('button.sup');



var btnplus2= document.getElementById("p");
var btnmoin2= document.getElementById("m");
btnplus2.addEventListener('click', augmenter2);
function augmenter2 () {
    document.getElementById("qty2").value=parseInt(document.getElementById("qty2").value) + 1;

    subtotal2();
    total();
}
btnmoin2.addEventListener('click', dimunuer2);
function dimunuer2(){
    if(document.getElementById("qty2").value>0){
        document.getElementById("qty2").value=parseInt(document.getElementById("qty2").value)-1;
    subtotal2();
    total();
    }else{
        return alert('la quantite ne peut etre inferieur a zero')
    }

}

function subtotal2(){
    let price1= parseInt(document.getElementById("prx").innerHTML);
    let quantity1= parseInt(document.getElementById("qty2").value);
    let sum=price1*quantity1;
    document.getElementById("prix33").innerHTML=sum;
}
console.log(btnplus);
console.log(btnmoin);
console.log(btnsup);


for(value of btnsup){
    value.addEventListener('click',remove)
}
console.log(btnsup)
btnplus.addEventListener('click', augmenter);

function augmenter(){
    document.getElementById("qty1").value=parseInt(document.getElementById("qty1").value)+ 1;
    subtotal();
    total();
}
btnmoin.addEventListener('click', dimunuer);
function dimunuer(){
    if(document.getElementById("qty1").value>0){
        document.getElementById("qty1").value=parseInt(document.getElementById("qty1").value)- 1;
    subtotal();
    total();
    }else{
        return alert('la quantite ne peut etre inferieur a zero')
    }

}
function subtotal(){
    let price= parseInt(document.querySelector('p.prix').innerHTML);
    let quantity= parseInt(document.querySelector('.qty').value);
    let sum1=price*quantity;
    document.querySelector('p.prix2').innerHTML=sum1;
}
function total(){
    let subt=parseInt(document.querySelector('p.prix2').innerHTML);
    let subt2=parseInt(document.querySelector('p.prix3').innerHTML);
    document.getElementById("ipt").value=subt+subt2+'fr';
}

for(value of btnsup){
    value.addEventListener('click',remove)
}
console.log(btnsup)


function remove(){
    let parent=document.querySelector(".body")
    let child=document.querySelector(".line2")
    let childs=document.querySelector(".line3")
    parent.removeChild(child);
    parent.removeChild(childs);
}



