import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})
export class PastaPage implements OnInit {

  txtSearch = ""

  

  jenistampilan = "accordion"

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  deletePasta(id:number){
    this.foodservice.deletePasta(id).subscribe(
      (response:any)=>{
        if(response.result == 'success'){
          alert("success!")
          this.foodservice.pastaList().subscribe(
            (data)=> {
               this.pastas=data;
             }
           );
   
        }
        else{
          alert(response.message)
        }
      }
    )
  }
  pastas:any[]=[]
  filteredPastas: any[] = []




  constructor(private foodservice:FoodserviceService) { }

  ngOnInit() {
    //this.pastas = this.foodservice.pastas;
    this.foodservice.pastaList().subscribe(
      (data) => {
        this.pastas = data
        this.filteredPastas = data
      }
    );
  }

  SearchPasta(){
    this.filteredPastas = this.pastas.filter((pasta) => {
      return pasta.name.toLowerCase().includes(this.txtSearch.toLowerCase());
    });
  }

}
