let wrap=document.getElementById("wrap");
wrap.style.display="inline-block";
var title=document.getElementById("title");
let faveColor="";
let log=()=>{
var userList=window.localStorage.getItem("users");
userList=JSON.parse(userList);
var email=document.getElementById("email").value;
var passw=document.getElementById("password").value;
for(var i=0;i<userList.length;i++)
{

    if(userList[i].email===email && userList[i].password===passw)
    {
       
        wrap.style.display="none"
var colorDiv=document.getElementsByClassName("IsUser")[0];
colorDiv.style.display="inline-block";

wrap.style.display="none";
title.innerHTML=`HELLOW ${userList[i].user}`
    }
    else{
        alert("Password and email are not correct");
    }
}
}
let MakeColor=()=>{
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    return `rgb(${b},${g},${b})`;
}
let colorToTitle=()=>{
    var rgb=MakeColor();
    faveColor=rgb;
    title.style.color=rgb;
    let divcolor=document.getElementById("myColor");
    divcolor.style.backgroundColor=rgb;
}
let Save=()=>{
window.localStorage.setItem("faveColor",faveColor);
}
