import { testCases } from './tests.js'

export default function translateText(text) {
  // https://stackoverflow.com/questions/11704182/regex-with-extended-latin-alphabet-%c3%a4-%c3%b6-%c3%bc-%c3%a8-%c3%9f
  const splitText = text.match(/[\p{L}]+|[^\p{L}]+/giu);

  const translatedArray = splitText.map(string => translateWord(string.toLowerCase()));

  return translatedArray.join('');
}

export function translateWord(word) {
  if(typeof word !== 'string') throw new Error('expected string as argument');
  
  const translation = testCases[word];
  return translation || word;
}