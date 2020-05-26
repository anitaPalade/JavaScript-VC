function inputValidation(){
    var inputString = document.getElementById('inputstr').value;
    var stringPattern = /^[a-zA-Z]{3,20}$/;
        if (inputString.match(stringPattern)){
            return true;
        }else {
            alert("Please enter valid alphabet string.\n(String must be atleast 3 character long(max can be 20)");
        }
     return true;
}       

function searchVowels(){
    var vowelPattern = /[aeiou]/gi;
    if (inputValidation()==true){
        var inputString = document.getElementById('inputstr').value;
            for(var index=0 ; index<inputString.length; index++){
                if (inputString.charAt(index).match(vowelPattern)){
                    var htmlElement = document.getElementById("showVowel");
                    htmlElement.innerHTML = "Vowels:"
                    htmlElement.insertAdjacentHTML('beforeend', `<div id="vowels">${inputString.charAt(index)}</div>`);
                    
                }
            }
        
    } 
}

function searchConsonants(){
    var consonantPattern = /[^aeiou]/gi;
    if (inputValidation()==true){
        var inputString = document.getElementById('inputstr').value;
            for(var index=0 ; index<inputString.length; index++){
                if (inputString.charAt(index).match(consonantPattern)){
                    var htmlElement = document.getElementById("showConsonant");
                    htmlElement.innerHTML = "Consonants:"
                    htmlElement.insertAdjacentHTML('beforeend', `<div id="consonants">${inputString.charAt(index)}</div>`);
                } 
        }
        
    }
}
        
function clearInput(){
    document.getElementById('inputstr').value = "";
    document.getElementById('showVowel').innerHTML = "";
    document.getElementById('showConsonant').innerHTML = "";
}
   



    
    
    
    
