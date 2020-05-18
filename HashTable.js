class HashTable             {
    constructor(size = 53){
        this.keyMap = newArray(size);
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
    // pseudocode:
        // set:
        // accepts a key / value pair
        // hashes the key
        // stores the keyvalue pair in the hash table array via seperate chaining

        // get:
        // acccepts a key
        // hashes the key
        // retrieves the key - value pair in the hash table
        // if the key isn't found returns undefined
}
