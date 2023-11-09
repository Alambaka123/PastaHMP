import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {

  index = 0
  new_step = 0
  new_instruction = ""
  public alertButton = ['OK']

  pastas:any = {}
  constructor(private route:ActivatedRoute, private foodservice:FoodserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        this.index = params['index']
        this.foodservice.pastaDetail(this.index).subscribe(
          (data) => {
            this.pastas = data
          }
        )
        this.foodservice.getLatestStep(this.index).subscribe(
          (step)=>{
            this.new_step = parseInt(step,10) + 1
          }
        )
      }
    )
    //this.pastas = this.foodservice.pastas
  }

  AddInstruction(){
    this.foodservice.addInstruction(this.index, this.new_step, this.new_instruction).subscribe(
      (response:any)=>{
        if(response.result == 'success'){
          alert('Success')
          this.route.params.subscribe(
            params=>{
              this.index = params['index']
              this.foodservice.pastaDetail(this.index).subscribe(
                (data) => {
                  this.pastas = data
                }
              )
              this.foodservice.getLatestStep(this.index).subscribe(
                (step)=>{
                  this.new_step = parseInt(step,10) + 1
                }
              )
            }
          )
        }
        else{
          alert(response.message)
        }
      }
    )
    this.new_instruction = ""
    
  }

}
