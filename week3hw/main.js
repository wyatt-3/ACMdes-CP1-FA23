function changeImage (fileName) {
    let img = document.querySelector('#specialimage');
    img.setAttribute("src", fileName);
}
let myInterval = window.setInterval(switchImage, 2000);