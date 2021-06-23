/**
 * Write the necessary Node script to make this code work for all arrays:
 *  [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); 
 * // [1,3,5,7] Test your code in Node.JS CLI
 */
 
 

class ArrayFilter {
    constructor(arr) {
        this.array = arr;
    }
    even() {
        return this.array.filter(n => n % 2 === 0);
    }
    odd() {
        return this.array.filter(n => n % 2 !== 0);
    }

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15,16,17,18];
let array = new ArrayFilter(arr);

let even = array.even();
let odd = array.odd();
console.log(even);
console.log(odd);
console.log(Date());


/* 
 * let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.even = function () {
    return this.filter(n => n % 2 == 0);
}

Array.prototype.odd = function () {
    return this.filter(n => n % 2 !== 0);
}

let temp = arr.even();
console.log(temp);

arr = [1, 2, 3, 4, 5, 6, 7, 8];
temp = arr.odd();
console.log(temp);
 */