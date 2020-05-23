                            class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total  = 0;
        let WEIRD_PRIME = 31;
        //console.log(key.length);
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) %  this.keyMap.length;
        }
        return total;
    }

    // pseudocode:
        // set:
    set(key, value) {    // accepts a key / value pair
        let aHash = this._hash(key);    // hashes the key
        if(this.keyMap[aHash]){    // stores the keyvalue pair in the hash table array via seperate chaining
            this.keyMap[aHash].push([key, value]);
        } else {
            this.keyMap[aHash] = [[key, value]];
        }
        // he did:
        // if(!this.keyMap[aHash]) {    //if the array location is empty
        //     this.keyMap[aHash] = [];    // add an empty array
        // }
        // this.keyMap[aHash].push([key, value]);    // put your new pair in the array element
        //his version is about ten keystrokes shorter
    }

    // get:
    get(key) {    // accepts a key
        let anotherHash = this._hash(key);    // hashes the key
        let aVar = this.keyMap[anotherHash];
        if(aVar) {    // if there are conflicts in keyMap[aHash] we need to search for the right one
            if(aVar.length > 1){
                for(let i = 0; i < this.keyMap.length; i++) {
                    if(aVar[i][0] == key) {
                        return aVar[i];
                    }
                }
            }                        
            return aVar;    // retrieves the key - value pair in the hash table
        } else {
            return undefined;    // if the key isn't found returns undefined
        }
    } // end get()

    keys() {
        //pseudocode
        // initalize an array to hold the output
        let keysArray = [];
        for(let j = 0; j < this.keyMap.length; j++) {    // loops thru keyMap
            if(this.keyMap[j]) {    // if keyMap location has an element
                for(let k = 0; k < this.keyMap[j].length; k++) {    // loops thru keyMap[j] subarrays
                    keysArray.push(this.keyMap[j][k][0]);
                }                              
            }
        } // end for j
        return keysArray; 
    } // end keys()

    values() {
        //pseudocode
        // loops thru the hash table array and returns an array of the values in the table
        // ibid
    } // end values()

}// end HashTable

let ht = new HashTable(17);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "DDA0DD");
//console.log(ht.get("yellow"));
console.log("The keys are: ", ht.keys());
/* 
ht.set("abc", "def");
console.log(ht);
console.log("");
ht.set("abc", "ghi");
console.log(ht); */