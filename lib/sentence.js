'use strict';

const countSentences = function(sentences){
  let count = 0

  for (let idx = 0; idx < sentences.length; idx++) {
    const ele = sentences[idx];
    if(ele === "." || ele === "!" || ele === "?") count++
  }
  
  return count
};

module.exports = countSentences;
