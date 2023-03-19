
let output = document.getElementById("output");
const economy = () =>{
    let inputs = document.querySelectorAll("input")[0].value;
    let price1 = 4000
    let economyPrice = Number(inputs * price1);
    output.innerText = economyPrice

    console.log(economyPrice)
}
let output1 = document.getElementById("output1");
const midsize = () =>{
    let inputs2 = document.querySelectorAll("input")[1].value;
    console.log(inputs2)
    let price2 = 10000
    let economyPrice2 = Number(inputs2  * price2);
    console.log(economyPrice2)
    output1.innerText = economyPrice2
}
let output2 = document.getElementById("output2");
const luxury = () =>{
    let inputs = document.querySelectorAll("input")[2].value;
    let price3 = 20000
    let economyPrice3 = Number(inputs * price3);
    output2.innerText = economyPrice3

    console.log(economyPrice3)
}