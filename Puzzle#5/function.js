unction reverseStrWords(str){

    let myArr = str.split(""); // puts each work from string into an array
    let tempArr = []; //new array with words reversed 
    let tempWord =""; //will hold the string thats reversed
    let word =""; //place holder for the index of the current string index
  
    //LOOPS through array from end
    for(let i = myArr.length-1; i >= 0; i--){
  
        word = myArr[i]; //holds word at current index
  
  //Loops through each char of the word from the end
      for(let j = word.length - 1; j >= 0; j-- ){
  
        tempWord += word.charAt(j); //builds reverse string 
  
      }
  
    }
      tempArr.push(tempWord); //adds revered string to array 
      return tempArr.join(""); //turns the array back into a strind
  }