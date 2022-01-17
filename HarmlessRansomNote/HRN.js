function harmlessRansomNote(note, magazine) {
    const notesArr = note.split(' '); // creates an array of letter
    const magazineArr = magazine.split(' ');
    const magazineObj = {}; // hash table. The goal is to keep track of every specific letter.
    magazineArr.forEach(letter => {
    if(!magazineObj[letter]){ // if the letterisn't present, then set magazineObj equal to zero.
    magazineObj[letter] = 0;
    }
    magazineObj[letter]++;
    // then add the letter to the hash table.
    });
    let noteIsPossible = true;
    notesArr.forEach( letter => {
    if(magazineObj[letter]) { // if the letter is present in the object,  then remove duplicates.
    magazineObj[letter]--;
    if (magazineObj[letter] < 0)  { // less than zero, then set noteIsPossible to false because it doesn't exist.
    noteIsPossible = false;
    }
    } else {
    noteIsPossible = false; // return false if all necessary letter are not obtaine to form the note
    }
    })
    return noteIsPossible;
    }