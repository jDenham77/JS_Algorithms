/**
 * HASH TABLE / HASH MAP  ------- Time Complexity: O(1), USE: any time you want to store data!
 * - HASH TABLE are used to store key/value pairs. There's no order like arrays.
 *  They are FAST! Similar to objects in JS
 * - Hash functions help us convert the key back to the index, that way we know
 *  where it's located in an array
 * - Used for encroption, authentication, cryptocurrency, validation.
 * - Takes an input then gives a numeric output which references the value(input)
 * WHAT MAKES IT GOOD?:
 * 1. Fast
 * 2. Doesnt clutter at indicies, but distributes uniformly (Ex. Dictionary)
 * 3. SAME input always gives us SAME output
 * BIG O of Hash Tables; Average/ BEST = O(1) Constant, Worst O(N):
 * - Insertion O(1)
 * - Deletion: O(1)
 * - Access: O(1)
 * - Searching: Value = O(N); Key = O(1)
 * RECAP:
 * - Collections of key/value pairs
 * - FIND values quickly with key
 * - Insert k/v quickly
 * - Work by storing data in a large array, and hashing the keys.
 * - Good hash table should be fast, distribute keys uniformly, and be deterministic(Input === Output).
 * 
 *  * DEALING WITH COLISIONS , Colisions are innevitable but there's strategies to deal with the
 *  majority. Below are two common solutions.
 * 1. Seperate Chaining: NESTED DATA STRUCTURE [[[...]]] So we would look for the index then
 *  loop through that index to find the key/value
 * 2. Linear Probing: One piece of data for each empty slot. More complicated but also
 *  better at preventing collisions. If slot is full then it goes through the ++index to
 *  find the next open index ablleto store the key/value pair.
 */

//HASH FUNCTION FOR STRINGS ONLY, bec were using a string method. Not constant time
// it scales O(N). Data can be clustered pretty easily. Below are better examples for
// a constint time with no loop and also prime numbers used so that indicies wont get
// as cluttered in our buckets in the hash table

function hash(key, arrayLen) {
  let total = 0;
  for (let char in key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

/**
 * Hash functions take advantage of prime numbers to help randomize the data in the table,
 *  which minimizes colisions drastically!
 * - This doesnt help with colisions completely though, so the example below helps with this.
 */
function hashPrime(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
hashPrime("Hello", 13);
hashPrime("HI", 13);
hashPrime("HashMe", 13);

/**

 */

//HASH TABLE CLASS
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
  }
  //SET & GET HASH TABLE
  /** ----- SET -----
   * 1. Accepts key/value
   * 2. Hash the key
   * 3. Store key/value pair in the hash table array via SEPERATE CHAINING(Nested)
   */
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      // Take the index and see if there's nothing there if SO
      this.keyMap[index] = []; // Set index or that array to an empty array
    }
    this.keyMap[index].push([key, value]); //push the new key/value into array if index is empty
    return index;
  }
  /**
   * ------ GET ------
   * 1. Accepts a key
   * 2. Hashes the key
   * 3. Retrieves the key value pair in the hash table
   * 4. If no key found, return undefined
   * 5. Else loop over that keyMap[index] until found
   */
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //this.keyMap[index] = length at index
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  // KEYS METHOD: Loops over hash table and returns an array of the keys in the table,
  //  this method will only return the first key that was inserted.
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  // VALUES: Loops over hash table and returns an array of the values in the table
  // You want the unique values ONLY. Do a conditional check(I used includes() method)
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set("hello world", "Goodbye");
