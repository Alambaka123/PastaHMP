import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
})
export class NewpastaPage implements OnInit {

  new_name = ""
  new_desc = ""
  new_price = 0
  arr_price:number[] = []
  new_url = ""
  new_spicy=false
  public alertButton = ['OK']

  constructor(private foodservice:FoodserviceService, private router:Router) { }

  ngOnInit() {
    this.arr_price = this.generateNumberOptions(30000, 50000, 2000)
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
}

submitpasta()
{
    this.foodservice.addPasta(this.new_name, this.new_desc, this.new_price, this.new_url, this.new_spicy)
    this.router.navigate(['/pasta'])
    this.new_name = ""
    this.new_desc = ""
    this.new_price = 0
    this.new_url = ""
    this.new_spicy=false
}



}