export class MenuItem {
    
    id: number;
    name: string;
    price_s: number;
    price_m: number;
    price_l: number;
    
    constructor(id: number, name: string, price_s: number, price_m: number, price_l: number) {
        this.id = id;
        this.name = name;
        this.price_s = price_s;
        this.price_m = price_m;
        this.price_l = price_l;
    }
};