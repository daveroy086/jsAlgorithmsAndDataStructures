class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total  = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) %  this.keyMap.length;
        }
        return total;
    }

    //this.keyMap = ['DDA0DD','#FA8072','DDA0DD','#800000','#FFFF00','#808000','#F08080','#C71585'];

    set(key, value) {
        let aHash = this._hash(key);
        if(this.keyMap[aHash]){
            this.keyMap[aHash].push([key, value]);
        } else {
            this.keyMap[aHash] = [[key, value]];
        }
    }

    get(key) {
        let anotherHash = this._hash(key);
        let aVar = this.keyMap[anotherHash];
        if(aVar) {
            if(aVar.length > 1){
                for(let i = 0; i < this.keyMap.length; i++) {
                    if(aVar[i][0] == key) {
                        return aVar[i];
                    }
                }
            }                        
            return aVar;
        } else {
            return undefined;
        }
    } // end get()

    keys() {
        let keysArray = [];
        for(let j = 0; j < this.keyMap.length; j++) {
            if(this.keyMap[j]) {
                for(let k = 0; k < this.keyMap[j].length; k++) {
                    keysArray.push(this.keyMap[j][k][0]);
                }                              
            }
        } // end for j
        return keysArray; 
    } // end keys()

    values() {
        let valuesArray = [];
        for(let j = 0; j < this.keyMap.length; j++) {
           // console.log("valuesArray is ", valuesArray);
            if(this.keyMap[j]) {
                for(let k = 0; k < this.keyMap[j].length; k++) {
                    if(!valuesArray.includes(this.keyMap[j][k][1])) {
                        valuesArray.push(this.keyMap[j][k][1]);
                    }
                }                              
            }
        } // end for j
        return valuesArray; 
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
console.log(ht.get("yellow"), "...get works");
console.log("The values are: ", ht.values());
console.log("The keys are: ", ht.keys());
/* 
ht.set("abc", "def");
console.log(ht);
console.log("");
ht.set("abc", "ghi");
console.log(ht);
*/

/*
//values with nonworking if:
    values() {
        //pseudocode
        // loops thru the hash table array and returns an array of the values in the table
        // ibid
        let valuesArray = [];    //renamed array
        for(let j = 0; j < this.keyMap.length; j++) {
            console.log("valuesArray is ", valuesArray);
            if(this.keyMap[j]) {
                for(let k = 0; k < this.keyMap[j].length; k++) {
                    if(!valuesArray.includes(this.keyMap[j][k][1])) {    //values only gets unique values
                        valuesArray.push(this.keyMap[j][k][1]);    // gets proper element
                    }
                }                              
            }
        } // end for j
        return valuesArray; 
    } // end values()
*/