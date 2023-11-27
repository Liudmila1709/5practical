//const inputNode = document.getElementById('.source-text');
//const buttonNode = document.getElementById('.go');
//const outputNode = document.getElementById('.result-text');


//buttonNode.addEventListener('click' , function() {
//    const  = inputNode.value;
    
//    outputNode.innerHTML = output;
//})
let text = document.getElementById('source-text');
let container = document.getElementById('result-text');


function myClick() {
    container.innerHTML = '';

let string = text.value;
let base = 0;
let multiplier = 0.25;
for (let i = 0; i < string.length; ++i) {
    let asciiCode = string.charCodeAt(i);

    
    /**
     * 65...90 - A...Z
     * 97...122 - a...z
     * 
     */



    base += multiplier;
    let animation = 'style = "animation: appears 0.25s ' + base.toString() + 's both">' ;
    if (asciiCode >= 65 && asciiCode <= 90){
        container.innerHTML += '<img src = "bigletters/' + string[i] + '.png" ' + animation;
        continue;
    }
    if (asciiCode >= 97 && asciiCode <= 122){
        container.innerHTML += '<img src = "smolletter/small_' + string[i] + '.png" ' + animation;
        continue;
    }
    container.innerHTML += "<span " + animation + string[i] + "</span>";
}

console.log(text.value)
}


const bigletters = 'path/to/bigletters.png';
const smallletters = 'path/to/bigletters.png';



document.getElementById('go').addEventListener('click', myClick);
/*const bigletters = 'path/to/bigletters.png';
const smallletters = 'path/to/bigletters.png';

function myClick() {
    
    let a = document.getElementById('source-text').value;


    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(97 + i)
        a = 'path/to/' + letter + '.png';
    } 


    document.getElementById('result-text').textContent = a;

    convert(a)
    
}



//для затримки
let base = 0
const multiplier = 0.025
multiplier += base

for (let i = 0; i < String.length; ++i) {
    base += multiplier;
    let ascii = string.charCodeAt(i);
    let animation = 'style = "animation: appears 0.25s' + base.toString() + 's both"> ;
}*/
