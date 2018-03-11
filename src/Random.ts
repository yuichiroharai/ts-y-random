export class Random {

    private a:number; // min
    private b:number; // len
    private c:number; // step

    constructor(min:number, max:number, step=1e-16) {
        if (min > max) {
            let tmp = min;
            min = max;
            max = tmp;
        }
        if (step <= 0) step = 1e-16;
        let len = Math.round((max - min) / step + 1);

        this.a = min;
        this.b = len;
        this.c = step;
    }

    v() {
        return ((Math.random() * this.b) | 0) * this.c + this.a;
    }
    vs() {
        return this.v() * (Math.random() < 0.5 ? 1 : -1);
    }

}