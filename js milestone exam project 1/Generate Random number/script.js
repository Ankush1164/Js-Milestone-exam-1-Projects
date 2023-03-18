let button = document.getElementById("btn");
button.addEventListener("click" , ()=>{
    let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
    document.getElementById("h3").textContent = randomNumber;
    
})