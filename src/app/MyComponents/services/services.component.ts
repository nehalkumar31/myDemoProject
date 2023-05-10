import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/MyServices/api-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  public Player1:any=[];
  public Player2:any=[];
  public Player3:any=[];
  public userData:any=[];


  constructor(private api:ApiServicesService){
   
  }
  
getServicePlayer1(){
this.Player1= this.api.getPlayer1info();
}

getServicePlayer2(){
this.Player2= this.api.getPlayer2info();
}
getServicePlayer3(){
this.Player3= this.api.getPlayer3info();
}


getApiServiceData(){
  this.api.getApiData().subscribe((res:any)=>{
  this.userData=res;
  console.log(res);
  })

 
}

postApiServicesData(){
  this.api.postApiData(this.userData).subscribe((res:any)=>{
    console.log(res);
  })
}

onsubmitData(data:any){
  this.userData.push(data.value)
  this.postApiServicesData()
}
}









