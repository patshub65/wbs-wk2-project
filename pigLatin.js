// *HELPER FUNCTIONS
// Does the word start with a vowel?
function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter.toLowerCase());
}

// translate single word to pig latin

function translateWord(word) {
    
    word = word.toLowerCase();

    if (isVowel(word[0])) {
    return word + 'way';
    } else {
    let consonantCluster = '';
    let index = 0;
    while (index < word.length && !isVowel(word[index])) {
            consonantCluster += word[index];
            index++;
        }
    const restOfWord = word.slice(index);
        return restOfWord + consonantCluster + 'ay';
}
}

// *MAIN PROGRAM 

// get args from cmd line
const args = process.argv.slice(2)

// No input provided

if (args.length === 0) {
    // show error
    console.log('Error');
    return;
}

//Prepare results array

const translatedWords = [];

// Iterate over every word and translate

for (let i = 0; i < args.length; i++) {
        const word = args[i];

        const translated = translateWord(word);
        translatedWords.push(translated);
    }  

// join all translated words into one string

const result = translatedWords.join(' ');

// *OUTPUT

console.log('Original:', args.join(' '));
console.log('Pig latin:', result);

