var userList;
var counter;



let SaveUser=()=>{
    if(window.localStorage.length==0)
{
    counter=0;
    userList=[];
    let jsList = JSON.stringify(userList);
window.localStorage.setItem("users",jsList);
}
else
{
    let listfromLocal = window.localStorage.getItem("users");
    listfromLocal=JSON.parse(listfromLocal);
    userList=listfromLocal;
    counter=userList[userList.length-1].index;
}
    counter++;
var userName=document.getElementById("userName").value;
var userEmail=document.getElementById("email").value;
var passw=document.getElementById("password").value;

userList.push({index:counter,user:userName,email:userEmail,password:passw});
 jsList = JSON.stringify(userList);
window.localStorage.setItem("users",jsList);
window.location.href="./login.html";
}