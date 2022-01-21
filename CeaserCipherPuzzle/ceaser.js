function ceaserCipher(str, num) {    
     num = num % 26;     // assigned num
     var lowerCaseStr = str.toLowerCase();   // variable declaration  
     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');     
     var newStr = '';     // declaring empty string variable
     for(var i=0; i<lowerCaseStr.length; i++){    // for loop     
         var currentLetter = lowerCaseStr[i];         
         if(currentLetter === ' '){             
             newStr += currentLetter;             
             continue;        
            }         
            var currentIndex = alphabet.indexOf(currentLetter);         
            var newIndex = currentIndex + num;         
            if(newIndex>25) newInde= newIndex-26;         
            if(newIndex<0) newIndex= newIndex +26;         
            if(str[i] === str[i].toUpperCase()){             
                newStr += alphabet[newIndex].toUpperCase();}         
                else newStr += alphabet[newIndex];     
            } 
            return newStr 
        } 
        console.log(ceaserCipher('hi', 2))