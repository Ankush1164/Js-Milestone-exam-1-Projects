let images = document.getElementById("images");
let prevbtn = document.getElementById("previousbtn");
let nextbtn = document.getElementById("nextbtn");

let arr = [
    "https://images.pexels.com/photos/12094265/pexels-photo-12094265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14430075/pexels-photo-14430075.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/5231537/pexels-photo-5231537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/9888298/pexels-photo-9888298.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
]

let index = 0;
nextbtn.addEventListener("click" , ()=>{
    if (index === arr.length-1) {
        index === 0
    }else{
        index+=1 
    }
    images.src = arr[index]
})
prevbtn.addEventListener("click" , ()=>{
    if(index === 0){
        index ===0
    }else{
        index-=1
    }
   
    images.src = arr[index]
})