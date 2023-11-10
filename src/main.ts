import './style.css'
import { Artwork } from './Artwork';
import { Statue } from './Statue';

const szobrok: Artwork[] = [];
let osszDarabszam = 0;
let osszAr = 0;

document.getElementById('buttonElkuld')!.addEventListener('click', felvetel);

function felvetel() {
  const nev = (document.getElementById('nev') as HTMLInputElement).value;
  const year = parseInt((document.getElementById('year') as HTMLInputElement).value);
  const price = parseInt((document.getElementById('price') as HTMLInputElement).value);
  const height = parseInt((document.getElementById('height') as HTMLInputElement).value);
  document.getElementById('hibaUzenet')!.textContent = "";
  document.getElementById('hibaUzenet')!.style.color = "red";

  if (ellenorzes(nev, year, price, height)) {
    (document.getElementById('nev') as HTMLInputElement).value = "";
    (document.getElementById('year') as HTMLInputElement).value = "";
    (document.getElementById('price') as HTMLInputElement).value = "";
    (document.getElementById('height') as HTMLInputElement).value = "";
    osszDarabszam = osszDarabszam + 1;
    osszAr = osszAr + price;
    document.getElementById('osszesito')!.textContent = `Összesítő: Eddig felvett szobrok száma: ${osszDarabszam}, összesített áruk: ${osszAr}`;
    document.getElementById('osszAr')!.textContent = `${osszAr}`;
    document.getElementById('hibaUzenet')!.textContent = "Sikeres adatfelvétel!";
    document.getElementById('hibaUzenet')!.style.color = "green";
  }
}


function ellenorzes(nev: string, year: number, price: number, height: number) {
  const mintaNev = /^[a-zA-z, ]+$/;
  const currentYear = new Date().getFullYear();
  try {
    if (nev == '') {
      throw new Error("A szobor neve nem lehet üres!");
    }
    else if (!mintaNev.test(nev)) {
      throw new Error("Csak az angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat!");
    }
    else if (year > currentYear) {
      throw new Error("A készítés éve max. az aktuális évszám lehet!");
    }
    else if (price < 5) {
      throw new Error("Az érték min. 5 Ft kell, hogy legyen!");
    }
    else if (height < 15) {
      throw new Error("A magasság min 15 cm-nek kell, hogy legyen!");
    }
    else 
    {
      szobrok.push(new Statue(nev, year, price, height));
      return true;
    }
  } catch (errorUzenet) {
    if (errorUzenet instanceof Error) {
      document.getElementById('hibaUzenet')!.textContent = errorUzenet.message;
      return false;
    }
  }
}
