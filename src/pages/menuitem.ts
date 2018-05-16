export class MenuItem {
    
    id: number;
    name: string;
    price_s: string;
    price_m: string;
    price_l: string;

    constructor(id: number, name: string, price_s: string, price_m: string, price_l: string) {
        this.id = id;
        this.name = name;
        this.price_s = price_s;
        this.price_m = price_m;
        this.price_l = price_l;
    }
}

export enum Size{
    small,
    medium,
    large
}