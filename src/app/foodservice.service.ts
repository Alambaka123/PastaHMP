import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  /* pastas = [
    {
      name: "SALMON AGLIO OLIO",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/salmon-aglio-olio.png",
      description: "Pasta Spaghetti, Cabai, Paprika Hijau, Bawang Putih dengan Salmon Panggang",
      price: 52000,
      spicy: true
    },
    {
      name: "CLASSIC FETTUCCINE",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Classic-Fettuccine-With-Crispy-Chicken.png",
      description: "Pasta Fettuccine, Daging Ayam Asap, Saus Creamy dengan Chicken Strip dibalur Cream Cheese Mayo dan Beef Bits.",
      price: 35000,
      spicy: false
    },
    {
      name: "CHEESE LAVA",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Cheese-Lava.png",
      description: "Pasta Fusilli, Pepperoni Sapi, Saus Keju Cheddar, Beef Bits dengan Saus Cheese Fondue",
      price: 38000,
      spicy:false
    }, {
      name: "CREAMY TRUFFLE",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CREAMY-TRUFFLE.png",
      description: "Pasta Penne, Sosis Beef Chorizo,Bayam, Saus Alfredo, dan Truffle Oil",
      price: 42000,
      spicy:true
    }, {
      name: "SALMON MENTAIKO",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CLASSIC-SALMON-MENTAIKO.png",
      description: "Pasta Spaghetti, Ikan Salmon Fillet, Saus Mayo Mentai, dan Nori.",
      price: 56000,
      spicy:true
    },
  ]; */
  constructor(private http:HttpClient) { }

  addPasta(p_name:string,p_description:string,p_price:number,p_url:string,p_spicy:boolean)
{
  // this.pastas.push({name:p_name, url:p_url,description:p_description,price:p_price, spicy:p_spicy})
     const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
     const body = new URLSearchParams();
     body.set('name', p_name);
     body.set('desc', p_description);
     body.set('price', p_price.toString());
     body.set('url', p_url);
     const urlEncodedData = body.toString();
     return this.http.post(
    "https://ubaya.me/hybrid/160721049/new_pasta.php", urlEncodedData, { headers });
  
}

addInstruction(p_id:number,p_step:number,p_instruction:string)
{
  // this.pastas.push({name:p_name, url:p_url,description:p_description,price:p_price, spicy:p_spicy})
     const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
     const body = new URLSearchParams();
     body.set('id', p_id.toString());
     body.set('step', p_step.toString());
     body.set('instruction', p_instruction);
     const urlEncodedData = body.toString();
     return this.http.post(
    "https://ubaya.me/hybrid/160721049/new_instruction.php", urlEncodedData, { headers });
  
}

updatePasta(p_id:number ,p_name:string,p_description:string,p_price:number,p_url:string,p_spicy:boolean)
{
  // this.pastas.push({name:p_name, url:p_url,description:p_description,price:p_price, spicy:p_spicy})
     const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
     const body = new URLSearchParams();
     body.set('id', p_id.toString())
     body.set('name', p_name);
     body.set('desc', p_description);
     body.set('price', p_price.toString());
     body.set('url', p_url);
     const urlEncodedData = body.toString();
     return this.http.post(
    "https://ubaya.me/hybrid/160721049/update_pasta.php", urlEncodedData, { headers });
  
}

pastaList():Observable<any>{
    return this.http.get("https://ubaya.me/hybrid/160721049/pastas.php")
}
pastaDetail(id:number):Observable<any>{
  return this.http.get("https://ubaya.me/hybrid/160721049/pasta_detail.php?id=" + id)
}

getLatestStep(id:number):Observable<any>{
  return this.http.get("https://ubaya.me/hybrid/160721049/get_instruction_step.php?id=" + id)
}

deletePasta(p_id:number)
{
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('id', p_id.toString()); const urlEncodedData = body.toString();
  return this.http.post("https://ubaya.me/hybrid/160721049/delete_pasta.php", urlEncodedData, { headers });
}


generateNumberOptions(start: number, end: number, step: number): number[] {
  const options: number[] = [];
  for (let i = start; i <= end; i += step) {
    options.push(i);
  }
  return options;
}

}
