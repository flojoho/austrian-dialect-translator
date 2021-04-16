import { translateWord } from './translate.js';

export const testCases = {
  "ich": "i",
  "er": "ea",
  "wir": "wia",
  "ihr": "ia",

  "mich": "mi",
  "dich": "di",
  "ihn": "eam",
  "euch": "eich",

  "haben": "hom",
  "habe": "hob",
  "hast": "host",
  "hat": "hod",
  "habt": "hobz",

  "sein": "sei",
  "bist": "bisd",
  "ist": "is",
  "sind": "san",
  "seid": "saz",

  "werden": "wean",
  "werde": "wead",
  "wirst": "wiasd",
  "wird": "wiad",
  "werdet": "weaz",
  "war": "woa",
  "warst": "woasd",
  "waren": "woan",
  "wart": "woads",
  "wäre": "warad",
  "wärst": "waradst",
  "wären": "waradn",
  "wärt": "warad",
  
  "nicht": "ned",
  
  "ein": "ei",

  "eine": "a",
  "einen": "an",

  "alle": "olle",

  "voll": "voi",

  "oder": "oda",
  "aber": "owa",
  "doch": "do",
  "also": "oiso",
  "auch": "a",

  "wer": "wea",
  "was": "wos",

  "der": "dea",
  "die": "die",
  "das": "des",
  "dass": "doss",

  "mal": "moi",
  "einmal": "amoi",

  "schon": "scho",

  "alter": "oida",

  "hier": "do",

  "ganz": "gons",
  "ganze": "gonze",
  "ganzes": "gonzes",
  "ganzen": "gonzn",

  "gut": "guad",
  "schlecht": "schlechd",
}

for(const [word, correctTranslation] of Object.entries(testCases)) {
  const translatedWord = translateWord(word);

  if(translatedWord === correctTranslation) {
    console.log(`✅ ${word} => ${translatedWord}`);
  } else {
    console.error(`expected ${word} to translate to ${correctTranslation}, instead got ${translatedWord}`);
  }
}