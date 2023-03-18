// let btn = document.getElementById("accountOpenBtn")
// btn.addEventListener("click" , myFun)
// function myFun(){
//     let inputvalue = document.getElementById("name");
//     let x = inputvalue.value; 
//     console.log(x)
//     // let userName = document.getElementById("username");
//     // userName.textContent= x;
//     if( inputvalue == " "){
//         alert("enter value")
//     }
//     else{
//         window.location.href = "Userprofile.html"
//     }
// }   
let btn = document.getElementById("accountOpenBtn")
btn.addEventListener("click" , myFun)
function myFun(){
    let inputvalue = document.getElementById("name");
    let x = inputvalue.value; 
    
    let userName = x;
    let accountnum ="Account No :" + "30420100000" + Math.floor(Math.random()*(2000-1000)+1000);
   
    if( x == ""){
        alert("enter value")
    }
    else{
        localStorage.setItem("uname",userName);
        localStorage.setItem("acn",accountnum);
        window.location.href = "Userprofile.html"
    }
}