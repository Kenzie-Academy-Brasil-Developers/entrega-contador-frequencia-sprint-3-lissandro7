////************  BOTAO COUNTBUTTON */
const button = document.getElementById("countButton");
const lettersDiv = document.getElementById("lettersDiv");

const letterCounts = {};

button.addEventListener("click" , function(){

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    words =typedText.split(/\s/);

    for (let i = 0 ; i <= typedText.length; i++){

            currentLetter = typedText[i];

            if(letterCounts[currentLetter] === undefined){
                letterCounts[currentLetter] = 1;

            }
            else{
                letterCounts[currentLetter]++;
            }
    }

    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }

     const letterCounts1 = {};
     for (let i = 0; i < words.length; i++) {
        currentLetter = words[i];
        if (letterCounts1[currentLetter] === undefined) {
           letterCounts1[currentLetter] = 1; 
        } else { 
           letterCounts1[currentLetter]++; 
        }
     }
  
     for (let letter in letterCounts1) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts1[letter]} => `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
    


});



