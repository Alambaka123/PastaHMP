import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editpasta',
  templateUrl: './editpasta.page.html',
  styleUrls: ['./editpasta.page.scss'],
})
export class EditpastaPage implements OnInit {

  e_name = ""
  e_desc = ""
  e_price = 0
  arr_price:number[] = []
  e_url = ""
  e_spicy=false
  index = 0
  public alertButton = ['OK']


  constructor(private foodservice:FoodserviceService, private route:ActivatedRoute, private router:Router) { 
    this.arr_price = foodservice.generateNumberOptions(30000, 50000, 2000)
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params =>{
        this.index = params['index']

        this.foodservice.pastaDetail(this.index).subscribe(
          (data)=>{
            this.e_name = data.name
            this.e_desc = data.description
            this.e_price = data.price
            this.e_url = data.url
          }
        )
      })
    )
  }

  updatePasta(){
    this.foodservice.updatePasta(this.index, this.e_name, this.e_desc, this.e_price, this.e_url, this.e_spicy).subscribe(
      (response:any)=>{
        if(response.result == 'success'){
          alert('Success')
        }
        else{
          alert(response.message)
        }
      }
    )
    this.router.navigate(['/pasta'])
  }

}
