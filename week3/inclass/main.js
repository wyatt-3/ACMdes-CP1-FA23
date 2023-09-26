let firstDiv = document.getElementById("divOne")
let colorChangeButton = document.getElementById("btnChangeColor")

console.log(colorChangeButton)

let changeColor = function(){
    firstDiv.style.backgroundColor = "rgb(170,170,230)"
}

firstDiv.style.backgroundColor = "rgb(230, 170, 170)"
colorChangeButton.addEventListener("click", changeColor)
