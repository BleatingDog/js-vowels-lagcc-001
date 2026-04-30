'use strict';

var isAVowel = function(lttr){
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  // a
  if(typeof lttr !== 'string' || lttr.length !== 1){
    return false;
  }

  for(let i = 0; i < vowels.length; i++){
    if(lttr.toLowerCase() === vowels[i]){
      return true;
    }
  }
  return false;
};

module.exports = isAVowel;
