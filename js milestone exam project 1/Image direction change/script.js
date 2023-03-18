let image = document.getElementsByTagName("img");

document.onmousemove = (event) =>{
    const x = event.clientX * 100 / window.innerWidth + "%";
    const y = event.clientY *100 / window.innerHeight + "%";

    for(let i=0; i<2; i++){
        image[i].style.left = x;
        image[i].style.top = y;
        image[i].style.transform = `translate(-${x} , -${y})`
    }
}