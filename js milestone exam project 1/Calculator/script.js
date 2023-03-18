let screen = document.getElementById("screen");
let btn = document.querySelectorAll("button");
let blankScreen = " ";
for (item of btn){
    item.addEventListener("click" , calculate);
    function calculate(e){
        let btnText = e.target.innerText;
        if(btnText == "X"){
            btnText = "*";
            blankScreen = blankScreen + btnText;
            screen.value = blankScreen
        }else if(btnText == "AC"){
            blankScreen = " ";
            screen.value = blankScreen;
        }else if(btnText == "="){
            screen.value = eval(blankScreen)
        }else{
            blankScreen = blankScreen + btnText;
            screen.value = blankScreen
        }
    }
}