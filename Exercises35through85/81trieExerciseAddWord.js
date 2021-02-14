class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }

    addWord(word, index = 0) {
      
            if (word.length === 0) {
                    // if there are no more letters to add...
                this.isWord = true;
                    // ...you're at the end of the word
            }
    
            if (word.length > 0) {   // I there are still letters to add to your word
                var char = word[0];    //get the next letter
                if(this.characters[char]) {    // If it exists in the trie already
                    var subTrie = this.characters[char]    // 'step into' that characters object 
                } else {
                    subTrie = new Trie()    // create the new subtrie for that char
                }
                this.characters[char] = subTrie.addWord(word.slice(1));    // add the rest of the word
            }
        return this;
    }    // end addWord

    getWords(words = [], currentWord = "") {
      /* This function will return all the words which are
         contained in this Trie.
         it will use currentWord as a prefix,
         since a Trie doesn't know about its parents. */
      if (this.isWord) {
          words.push(currentWord);
      }
      for (var char in this.characters) {
          var nextWord = currentWord + char;
          this.characters[char].getWords(words, nextWord);
      }
      return words;
  }
}    // end Trie

var t2 = new Trie();
t2.addWord("ha")
t2.addWord("hat")
t2.addWord("has")
t2.addWord("have")
t2.addWord("hate")
  
console.log(t2.characters.h.characters.a.isWord); // true
console.log(t2.characters.h.characters.a.characters.t.isWord); // true
console.log(t2.characters.h.characters.a.characters.v.isWord); // false
console.log(t2.characters.h.characters.a.characters.v.characters.e.isWord); // true
console.log(t2.characters.h.characters.a.characters.t.characters.e.isWord); // true
console.log(Object.keys(t2.characters.h.characters.a.characters).length); // 3
console.log(t2.getWords());