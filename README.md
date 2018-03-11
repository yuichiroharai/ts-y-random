# ts-y-random
Utilities for generating random number.

## Install

[![NPM](https://nodei.co/npm/ts-y-random.png?mini=true)](https://nodei.co/npm/ts-y-random/)


## Usage

### Random

#### Constructor
constructor(min:number, max:number, step=1e-16)

#### Methods
v(): number

vs() :number

#### examples
```js
import {Random} from "ts-y-random";

let random, v;

// not using step.
random = new Random(1, 3);
v = random.v(); // 1 <= v <= 3

// interger
random = new Random(3, 5, 1);
v = random.v(); // 3 or 4 or 5
v = random.vs(); // 3 or 4 or 5 or -3 or -4 or -5

// float
random = new Random(0.15, 0.35, 0.05);
v = random.v(); // 0.15 or 0.2 or 0.25 or 0.3 or 0.35
```





### Average

#### Constructor
constructor(len:number)

#### Methods
v(): number

#### examples
```js
import {Average} from "ts-y-random/Average";

let results = {};
let average = new Average(4);
for (let i=0; i<10000; i++) {
    let v = average.v(); // 0 or 1 or 2 or 3
    let p = results[v];
    results[v] = p ? p + 1 : 1;
}
console.log(result); // { '0': 2500, '1': 2500, '2': 2500, '3': 2500 }
```





### Rate

#### Constructor
constructor(list:number[])

#### Methods
v(): number

#### examples
```js
import {Rate} from "ts-y-random/Rate";

let results = {};
let rate = new Rate([1, 2, 3, 4]);
for (let i=0; i<10000; i++) {
    let v = rate.v(); // 0 or 1 or 2 or 3
    let p = results[v];
    results[v] = p ? p + 1 : 1;
}
console.log(result); // { '0': 1030, '1': 1930, '2': 2993, '3': 4047 }
```