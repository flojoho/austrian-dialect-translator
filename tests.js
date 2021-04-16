import { translateWord } from './translate.js';

export const testCases = {
  "ich": "i",
  "er": "ea",
  "wir": "wia",
  "ihr": "ia",

  "mich": "mi",
  "dich": "di",
  "sich": "si",
  "ihn": "eam",
  "euch": "eich",

  "deren": "eana",

  "haben": "hom",
  "habe": "hob",
  "hab": "hob",
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

  "gar": "goa",
  "nicht": "ned",
  
  // "ein": "a",
  // "eine": "a",
  "einer": "ana",
  "einen": "an",
  "einem": "am",

  "alle": "olle",
  "alles": "ois",
  "allen": "olle",
  "jeder": "jeda",
  "jedem": "jedm",
  "jeden": "jedn",
  "kein": "koa",
  "keine": "kane",
  "keines": "kans",

  "voll": "voi",
  "ganz": "gonz",
  "ganze": "gonze",
  "ganzes": "gonzes",
  "ganzen": "gonzn",

  "nur": "nua",

  "noch": "nu",

  "oder": "oda",
  "aber": "owa",
  "doch": "do",
  "also": "oiso",
  "auch": "a",
  "dafür": "dafia",

  "wer": "wea",
  "was": "wos",

  // "der": "da",
  "die": "di",
  "das": "des",
  "dass": "doss",

  "mal": "moi",
  "einmal": "amoi",

  "schon": "scho",

  "hier": "do",

  "gut": "guad",
  "schlecht": "schlechd",

  "von": "vo",

  "als": "ois",
  "wie": "wia",

  "mit": "mid",
  "für": "fia",

  "weil": "wei",
  "da": "wei",
  "deshalb": "deshoib",
  "daher": "deshoib",
  "darum": "deshoib",
  "deswegen": "deswegn",

  "viel": "vü",
  "viele": "vüle",
  "mehr": "mea",
  "meist": "meisdns",
  "meiste": "meisde",
  "meisten": "meisdn",
  "meistens": "meistns",
  // "wenig": "weng",
  "wenigen": "wenign",
  "weniger": "weniga",
  "wenigsten": "wenigstn",
  "bisschen": "bissl",

  "klein": "kloa",
  "kleine": "klane",
  "kleines": "kloans",
  "kleiner": "klana",
  "kleinen": "klan",
  "kleinem": "klam",
  "großer": "großa",
  "großen": "großn",
  "großem": "großm",

  "anders": "ondas",
  "andere": "ondare",
  "anderes": "ondares",
  // "anderen": "ondan",
  "gleichen": "gleichn",

  "über": "üwa",
  "unter": "unta",
  "zwischen": "zwischn",
  "davor": "davoa",
  "vorne": "vuan",
  "hinten": "hintn",

  "man": "ma",

  "immer": "imma",
  "nie": "nia",

  // "wenn": "wonn",
  "dann": "donn",

  "vor": "voa",
  "nach": "noch",
  "erst": "easd",
  "erste": "easde",
  "erster": "easda",
  "ersten": "easdn",
  "letzte": "lezde",
  "letzter": "lezda",
  "letzten": "lezdn",
  "nächste": "nexde",
  "nächster": "nexda",
  "nächstes": "nexdes",
  "nächsten": "nexdn",

  "neu": "neich",
  "neue": "neiche",
  "neuer": "neicha",
  "neues": "neiches",
  "neuen": "neichn",
  "neuem": "neichn",
  "alt": "oid",
  "alte": "oide",
  "alter": "oida",
  "altes": "oids",
  "alten": "oidn",
  "altem": "oidm",

  "eher": "eha",

  "lieber": "liaba",
}

for(const [word, correctTranslation] of Object.entries(testCases)) {
  const translatedWord = translateWord(word);

  if(translatedWord === correctTranslation) {
    console.log(`✅ ${word} => ${translatedWord}`);
  } else {
    console.error(`expected ${word} to translate to ${correctTranslation}, instead got ${translatedWord}`);
  }
}