// let number = Math.random() * 255;
// let index = Math.round(number);
// console.log(number)
// console.log(color)
let colorName = document.getElementById('color-name');
const generateButton= document.getElementById('generate-color');

function generateColor(){
    let color = '#';
    const colorData = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9];
    const colorDataLength = colorData.length;
     for(let i = 0; i < 6; i++){
        color+=colorData[Math.floor(Math.random()* colorDataLength)]
     }
     return color;
}

 generateButton.addEventListener('click', ()=>{
    let newColor = generateColor();
    document.body.style.backgroundColor = newColor;
    colorName.textContent = `Color Name: ${newColor}`;
 })