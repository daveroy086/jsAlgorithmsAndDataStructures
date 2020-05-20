                            class HashTable {
    constructor(size = 17){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total  = 0;
        let WEIRD_PRIME = 31;
        console.log(key.length);
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) %  this.keyMap.length;
        }
        return total;
    }

    //let anArray = [];    // add size?
    // pseudocode:
        // set:
    set(key, value) {    // accepts a key / value pair
        let aHash = this._hash(key);    // hashes the key
        if(this.keyMap[aHash]){    // stores the keyvalue pair in the hash table array via seperate chaining
            this.keyMap[aHash].push([key, value]);
        } else {
            this.keyMap[aHash] = [[key, value]];
        }

    }
        // get:
    get(key) {    // accepts a key
        let moreHash = this._hash(value);    // hashes the key
        if(keyMap[moreHash]) {
            return anArray[moreHash];    // retrieves the key - value pair in the hash table
        } else {
            return undefined;    // if the key isn't found returns undefined
        }
    }
}// end HashTable

let ht = new HashTable();
ht.set("abc", "def");
console.log(ht);
console.log("");
ht.set("abc", "ghi");
console.log(ht);