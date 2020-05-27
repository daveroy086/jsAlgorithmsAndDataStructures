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

   printKeyMap(){
       console.log(this.keyMap);
   }

    set(key, value) {
        let aHash = this._hash(key);
        if(this.keyMap[aHash]){
            this.keyMap[aHash].push([key, value, aHash]);
        } else {
            this.keyMap[aHash] = [[key, value, aHash]];
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
                    console.log("this.keyMap[j][k][1] is ", this.keyMap[j][k][1]);
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

ht.printKeyMap();

console.log(ht.get("yellow"), "...get works");
console.log("The values are: ", ht.values());
console.log("The keys are: ", ht.keys());

 // this.keyMap = ['DDA0DD','#FA8072','DDA0DD','#800000','#FFFF00','#808000','#F08080','#C71585'];

// this.keyMap = [ [ [ 'plum', 'DDA0DD' ] ], [ [ 'salmon', '#FA8072' ] ], [ [ 'maroon', '#800000' ], [ 'yellow', '#FFFF00' ] ], [ [ 'olive', '#808000' ] ], [ [ 'lightcoral', '#F08080' ] ], [ [ 'mediumvioletred', '#C71585' ] ] ];

/* this.keyMap = [ [ [ 'plum', 'DDA0DD', 0 ] ], [], [], 
[ [ 'salmon', '#FA8072', 3 ] ], [], [], [], [],
[ [ 'maroon', '#800000', 8 ], [ 'yellow', '#FFFF00', 8 ] ], [], 
[ [ 'olive', '#808000', 10 ] ], [], [],
[ [ 'lightcoral', '#F08080', 13 ] ], [], [], 
[ [ 'mediumvioletred', '#C71585', 16 ] ] ];
*/