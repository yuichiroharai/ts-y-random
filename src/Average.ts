import {generateRandomIntArray} from "./utils";

export class Average {

    private a:number; // len
    private b:number[]; // list
    private c:number; // value

    constructor(len:number) {
        this.a = len > 0 ? len : 0;
    }


    v() {
        this.g();
        return this.c = this.b.shift();
    }

    private g() {
        let list = this.b;
        if (list && list.length > 0) return;
        list = generateRandomIntArray(this.a);
        if (this.c === list[0]) {
            list = list.reverse();
        }
        this.b = list;
    }

}
