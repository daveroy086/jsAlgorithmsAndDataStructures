class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    findWord(word, index = 0) {
        // This function will return the node in the trie
        // which corresponds to the end of the passed in word.
        // Be sure to consider what happens if the word is not in this Trie.
        var char = word[index];
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }

    getWords(words = [], currentWord = "") {
        // This function will return all the words which are
        // contained in this Trie.
        // it will use currentWord as a prefix,
        // since a Trie doesn't know about its parents.
        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
    autoComplete(prefix) {
        // This function will return all completions
        // for a given prefix.
        // It should use find and getWords.
        var subTrie = this.find(prefix);
        if (subTrie) {
            return subTrie.getWords([], prefix);
        } else {
            return [];
        }
    }
    removeWord(word) {
        console.log("word is ", word);
        /** Remove the subTrie that starts with
         *  the first letter not in another word
         */
        if(word.length === 0){
            // removes a word like 'fat' from a trie that contains a
            // word like 'fate'
            this.isWord = false;
            return;
        }

        let subTrie = this.characters[word[0]];   //step into characters
        console.log("subTrie is ", subTrie);
        subTrie.removeWord(word.slice(1));    // step down a letter
        if(Object.keys(subTrie.characters).length===0 &&
                // 
               !subTrie.isWord){
            delete this.characters[word[0]];
        }
  
    }

}    // end Trie

// Instructions:
/** Write a function called removeWord which accepts a string and 
 * removes the word from the Trie. addWord is implement to help you test the function.
 *  */