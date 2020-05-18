class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total  = 0;
        let WEIRD_PRIME = 31;
        for(let I = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    //let anArray = [];    // add size?
    // pseudocode:
        // set:
    set(key, value) {    // accepts a key / value pair
        let someHash = this._hash(value);    // hashes the key
        // stores the keyvalue pair in the hash table array via seperate chaining
        keyMap[someHash].push([key, value]);
        /***************************use deleteMe to finish making this work */
    }
        // get:
    get(key) {    // acccepts a key
        let moreHash = this._hash(value);    // hashes the key
        if(keyMap[moreHash]) {
            return anArray[moreHash];    // retrieves the key - value pair in the hash table
        } else {
            return undefined;    // if the key isn't found returns undefined
        }
    }
}// end HashTable