function countLetters(str) 
{
    const letterCount = new Map();
    
    for (const letter of str) 
    {
      letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    }
    
    return letterCount;
  }
  
  console.log(countLetters("banana"));
  