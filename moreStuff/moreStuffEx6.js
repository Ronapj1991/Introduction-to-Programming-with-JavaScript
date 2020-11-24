let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(arrayOfWords, regexPattern) {
  let matchedWords = [];
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    if (regexPattern.test(arrayOfWords[i])) {
      matchedWords.push(arrayOfWords[i]);
    }
  }
  
  return matchedWords;
}