export class Rate {

    private a:number[]; // list
    private b:number; // len
    private c:number; // total

    constructor(list:number[]) {
        if (!Array.isArray(list) || list.length < 1) list = [1];

        let len = list.length;
        let i;
        let total = 0;
        for (i=0; i<len; i++) {
            total += list[i];
        }

        this.a = list;
        this.b = len;
        this.c = total;
    }

    v() {
        let list = this.a;
        let len = this.b;
        let total = this.c;

        let value = Math.random();
        let offset = 0;
        let i;
        for (i=0; i<len; i++) {
            offset += list[i] / total;
            if (value < offset) return i;
        }
        return i;
    }

}