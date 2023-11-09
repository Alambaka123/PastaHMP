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
    this.arr_price = this.foodservice.generateNumberOptions(30000, 50000, 2000)
  }


submitpasta()
{
    this.foodservice.addPasta(this.new_name, this.new_desc, this.new_price, this.new_url, this.new_spicy).subscribe(
      (response:any)=>{
        if(response.result == 'success'){
          alert('Success!')
        }
        else{
          alert(response.message)
        }
      }
    )
    this.router.navigate(['/pasta'])
    this.new_name = ""
    this.new_desc = ""
    this.new_price = 0
    this.new_url = ""
    this.new_spicy=false
}



}
