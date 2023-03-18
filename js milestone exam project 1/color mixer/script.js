// let input1 = document.getElementById("inpt1").value;
// let input2 = document.getElementById("inpt2").value;
// let output = document.getElementById("outpt");
// let btn = document.getElementById("btn");
// btn.addEventListener("click" , changeColor=()=>{
//     let color = input1 + input2
//     console.log(color)
// switch (color) {
//     case "redblue":
//         // output.innerText = "purple"
//         console.log("purple")
//         break;
//     case "redyellow":
//         // output.innerText = "orange"
//         console.log("orange")
//         break;
//     case "blueyellow":
//         // output.innerText = "green"
//         console.log("green")
//         break;
//     default:
//         // output.innerText = "Invalid Color"
//         console.log("invalid color")
//         break;
// }
// })



let output = document.getElementById("outpt");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

let input1 = document.getElementById('inpt1').value
let input2 = document.getElementById('inpt2').value

    let color = input1 + input2
    switch (color) {
        case "redblue":
            output.innerText = "purple" 
            
            break;
        case "redyellow":
            output.innerText = "orange" 
            
            break;
        case "blueyellow":
            output.innerText = "green" 
            
            break;
        default:
            output.innerText = "Invalid Color" 
            
            break;
    }
})
