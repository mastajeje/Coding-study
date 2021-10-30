class HashTable {
  constructor(size) {
    //this represent memory
    this.data = new Array(size);
  }

  set = (key, value) => {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  };

  get = (key) => {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      const target = currentBucket.find((element) => element[0] === key);
      return target[1];
    }

    return undefined;
  };

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  keys = () => {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  };
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("orange", 540);

console.log(myHashTable.data);
console.log(myHashTable.keys());
