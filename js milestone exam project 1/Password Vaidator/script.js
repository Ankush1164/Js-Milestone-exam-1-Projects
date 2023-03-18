const validate = () =>{
let pass = document.getElementById("password").value;
let cnfrpass = document.getElementById("cnfrmpassword").value;
let warning = document.getElementById("warning");
let bdy = document.getElementsByTagName("body");

if(pass == "" && cnfrpass == ""){
    warning.innerText = "Please fill all the details.."
    warning.style.color = "purple"
}
else if (pass === cnfrpass){
    warning.innerText = "Password Match... Please wait to continue";
    warning.style.color = "green";
    setInterval(() => {
        window.open("https://media.tenor.com/1a_Ym9BEOpwAAAAC/tarak-mehta-tarak.gif")
    }, 1000);
    
}else{
    warning.innerText = "Password doesn't match... Retry it 😐";
    warning.style.color = "red"
    bdy.style.backgroundColor = "red";
}
}