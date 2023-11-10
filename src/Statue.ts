import { Artwork } from "./Artwork";

export class Statue implements Artwork {
    title: string;
    year: number;
    price: number;
    height: number;

    constructor(title: string, year: number, price: number, height: number) {

        const mintaNev = /^[a-zA-z, ]+$/;
        const currentYear = new Date().getFullYear();

        if (title != '') {
            if (mintaNev.test(title)) {
                this.title = title;
            }
            else {
                throw new Error("Csak az angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat!");
            }
        }
        else {
            throw new Error("A szobor neve nem lehet üres!");
        }
        if (year <= currentYear) {
            this.year = year;
        }
        else {
            throw new Error("A készítés éve max. az aktuális évszám lehet!");
        }
        if (price >= 5) {
            this.price = price;
        }
        else {
            throw new Error("Az érték min. 5 Ft kell, hogy legyen!");
        }
        if (height >= 15) {
            this.height = height;
        }
        else {
            throw new Error("A magasság min 15 cm-nek kell, hogy legyen!");
        }
    }
}