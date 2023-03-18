
let output = document.getElementById("output")
const btn = document.getElementById("btn")
btn.addEventListener("click" , ()=>{
    let input = document.getElementById("inpt").value;
    let reg = /[aeiou]/gi
    let test = input.match(reg)
    let finalOutput = (`There are ${test.length} Vowels`);
    output.innerText = finalOutput
})
const names = 56
// console.log(names/0)