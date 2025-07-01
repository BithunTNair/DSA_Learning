class Hashtable {
    constructor(size) {
        this.table = new Array(size)
    };
    _hashfunction(key) {
        let sum = 0;
        const primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(i) - 96;
            sum = (sum * primeNumber + charCode) % this.table.length;
        }
        return sum;

    };
    set(key, value) {
        const index = this._hashfunction(key);
        if (!this.table[index]) this.table[index] = [];

        this.table[index].push([key, value]);

    };
    get(key) {
        const index = this._hashfunction(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    };
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    keys.push(this.table[i][j][0]);

                }
            }
        }
        return keys;
    };
    getAllValues() {
        let values = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    values.push(this.table[i][j][1]);

                }
            }
        }
        return values;
    }

};

const hash= new Hashtable();
hash.set('Bithun',24);
hash.set('Anu',26);
hash.set('manu',25);
hash.set('Kishore',100);
console.log(hash.get('Anu'));
console.log(hash.getAllKeys());
console.log(hash.getAllValues());





