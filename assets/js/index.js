// let number = Math.random() * 255;
// let index = Math.round(number);
// console.log(number)
// console.log(color)
let colorName = document.getElementById('color-name');
const generateButton= document.getElementById('generate-color');
let text = document.getElementById("myText");
// text.value = "13asdas12";
function generateColor(){
     text.value = '#';
    const colorData = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9];
    const colorDataLength = colorData.length;
     for(let i = 0; i < 6; i++){
      text.value +=colorData[Math.floor(Math.random()* colorDataLength)]
     }
     return text.value;
}

 generateButton.addEventListener('click', ()=>{
    let newColor = generateColor();
    document.body.style.backgroundColor = newColor;
 })


 function copyText() {

   text.select();
   text.setSelectionRange(0, 99999); 
   
   navigator.clipboard.writeText(text.value)
       .then(() => {
           document.getElementById("status").innerText = "Copied!";
       })
       .catch(err => {
           document.getElementById("status").innerText = "Error copying";
           console.error(err);
       });
}
