class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
    }
}

/*
This function should add the given word starting from the given index to the Trie.
It will be recursive and notify the correct child of this Trie to add the word starting from a later index.
Consider what the add function should do when it reaches the end of the word as a word does not necessarily end at a leaf.
You must mark nodes which are the ends of words so that the words can be reconstructed later.
*/
    var firstTrie = new Trie();
    firstTrie.addWord("fun")
    firstTrie.characters // {f: Trie}
    !!firstTrie.characters["f"] // true
     
    firstTrie.characters.f.characters.u // {u: Trie}
    !!firstTrie.characters.f.characters.u // true
        // '!!' isn't a new operator. It's the '!' you've already seen (as in '!=') done twice
            // !!true equals !(!true) equals !(false) equals true
        // so !! is the same as does it exist???...do an experiment with various true and false values an see what i get

    firstTrie.characters.f.characters.u.characters.n.isWord // true
    !!firstTrie.characters.f.characters.u.characters.n // true
    !!firstTrie.characters.f.characters.u.characters.n.characters // {}
     
    !!firstTrie.characters.f.characters.u.characters.l // true
     
    var secondTrie = new Trie();
    secondTrie.addWord("ha")
    secondTrie.addWord("hat")
    secondTrie.addWord("has")
    secondTrie.addWord("have")
    secondTrie.addWord("hate")
     
    secondTrie.characters.h.characters.a.isWord // true
    secondTrie.characters.h.characters.a.characters.t.isWord // true
    secondTrie.characters.h.characters.a.characters.v.isWord // false
    secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
    secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true
     
    Object.keys(secondTrie.characters.h.characters.a.characters).length // 3

    /*
    https://www.geeksforgeeks.org/trie-insert-and-search/

    // Pseudocode for python program for insert and search operation in a Trie 

    ....
    // Trie node class 
    ....//  isEndOfWord is True if node represent the end of the word 

    ....// Trie data structure class 
    ....// Returns new trie node (initialized to NULLs) 
    ....// private helper function 
    ....    // Converts key current character into index 
    ....def insert(self,key): 
    ........
    ....// If not present, inserts key into trie 
    ....// If the key is prefix of trie node, 
    ....// just marks leaf node 
    ........//if current character is not present 
    ........//  mark last node as leaf 
    ....def search(self, key): 
    ........
    ........// Search key in the trie 
    ........// Returns true if key presents 
    ........// in trie, else false 
    // this is the test section:
    ....// Input keys (use only 'a' through 'z' and lower case) 
    // creates a new trie with which contains the words in the array
        // ["the","a","there","anaswe","any", "by","their"] 
    ....// create the Trie object 
    ....t = Trie() 
    ....// fill trie with array words
    ....// Search for different keys 
`    */

    /*
    https://blog.benoitvallon.com/data-structures-in-javascript/the-trie-data-structure/
    
    function Node(data) {
      this.data = data;
      this.isWord = false;
      this.prefixes = 0;
      this.children = {};
    }
    
    function Trie() {
      this.root = new Node('');
    }
    
    Trie.prototype.add = function(word) {
      if(!this.root) {
        return null;
      }
      this._addNode(this.root, word);
    };
    Trie.prototype._addNode = function(node, word) {
      if(!node || !word) {
        return null;
      }
      node.prefixes++;
      var letter = word.charAt(0);
      var child = node.children[letter];
      if(!child) {
        child = new Node(letter);
        node.children[letter] = child;
      }
      var remainder = word.substring(1);
      if(!remainder) {
        child.isWord = true;
      }
      this._addNode(child, remainder);
    };
    Trie.prototype.remove = function(word) {
      if(!this.root) {
        return;
      }
      if(this.contains(word)) {
        this._removeNode(this.root, word);
      }
    };
    Trie.prototype._removeNode = function(node, word) {
      if(!node || !word) {
        return;
      }
      node.prefixes--;
      var letter = word.charAt(0);
    
      var child = node.children[letter];
      if(child) {
        var remainder = word.substring(1);
        if(remainder) {
          if(child.prefixes === 1) {
            delete node.children[letter];
          } else {
            this._removeNode(child, remainder);
          }
        } else {
          if(child.prefixes === 0) {
            delete node.children[letter];
          } else {
            child.isWord = false;
          }
        }
      }
    };
    Trie.prototype.contains = function(word) {
      if(!this.root) {
        return false;
      }
      return this._contains(this.root, word);
    };
    Trie.prototype._contains = function(node, word) {
      if(!node || !word) {
        return false;
      }
      var letter = word.charAt(0);
      var child = node.children[letter];
      if(child) {
        var remainder = word.substring(1);
        if(!remainder && child.isWord) {
          return true;
        } else {
          return this._contains(child, remainder);
        }
      } else {
        return false;
      }
    };
    Trie.prototype.countWords = function() {
      if(!this.root) {
        return console.log('No root node found');
      }
      var queue = [this.root];
      var counter = 0;
      while(queue.length) {
        var node = queue.shift();
        if(node.isWord) {
          counter++;
        }
        for(var child in node.children) {
          if(node.children.hasOwnProperty(child)) {
            queue.push(node.children[child]);
          }
        }
      }
      return counter;
    };
    Trie.prototype.getWords = function() {
      var words = [];
      var word = '';
      this._getWords(this.root, words, words, word);
      return words;
    };
    Trie.prototype._getWords = function(node, words, word) {
      for(var child in node.children) {
        if(node.children.hasOwnProperty(child)) {
          word += child;
          if (node.children[child].isWord) {
            words.push(word);
          }
          this._getWords(node.children[child], words, word);
          word = word.substring(0, word.length - 1);
        }
      }
    };
    Trie.prototype.print = function() {
      if(!this.root) {
        return console.log('No root node found');
      }
      var newline = new Node('|');
      var queue = [this.root, newline];
      var string = '';
      while(queue.length) {
        var node = queue.shift();
        string += node.data.toString() + ' ';
        if(node === newline && queue.length) {
          queue.push(newline);
        }
        for(var child in node.children) {
          if(node.children.hasOwnProperty(child)) {
            queue.push(node.children[child]);
          }
        }
      }
      console.log(string.slice(0, -2).trim());
    };
    Trie.prototype.printByLevel = function() {
      if(!this.root) {
        return console.log('No root node found');
      }
      var newline = new Node('\n');
      var queue = [this.root, newline];
      var string = '';
      while(queue.length) {
        var node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if(node === newline && queue.length) {
          queue.push(newline);
        }
        for(var child in node.children) {
          if(node.children.hasOwnProperty(child)) {
            queue.push(node.children[child]);
          }
        }
      }
      console.log(string.trim());
    };
    
    var trie = new Trie();
    trie.add('one');
    trie.add('two');
    trie.add('fifth');
    trie.add('fifty');
    trie.print(); // => | o t f | n w i | e o f | t | h y
    trie.printByLevel(); // => o t f \n n w i \n e o f \n t \n h y
    console.log('words are: one, two, fifth, fifty:', trie.getWords()); // => [ 'one', 'two', 'fifth', 'fifty' ]
    console.log('trie count words is 4:', trie.countWords()); // => 4
    console.log('trie contains one is true:', trie.contains('one')); // => true
    console.log('trie contains on is false:', trie.contains('on')); // => false
    trie.remove('one');
    console.log('trie contains one is false:', trie.contains('one')); // => false
    console.log('trie count words is 3:', trie.countWords()); // => 3
    console.log('words are two, fifth, fifty:', trie.getWords()); // => [ 'two', 'fifth', 'fifty' ]
    
    */