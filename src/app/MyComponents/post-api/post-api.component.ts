import { Component } from '@angular/core';
import { PostServicesService } from 'src/app/MyServices/post-services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent {

  public userdata:any=[];
  public formData:any=[];
  public fname:any;
  public lname:any;
  public eml:any;




 constructor(private post:PostServicesService){
 this.getApi();

 }
 

  onsubmitData(data:any){
    this.userdata.push(data.value)
  this.sendedData();
  
  }

  getApi(){
    this.post.getApiData().subscribe((res:any)=>{
      this.userdata=res.data;
    })
  };

  sendedData(){
  this.post.sendData(this.userdata).subscribe((res:any)=>{
    console.log(res)
  })
  }

  deleteRow(data:any){
   console.warn(this.userdata)
  this.userdata.forEach((element:any , index:any) => {
    if(element.id==data.id){
      this.userdata.splice(data-1,1)
    }
  });

  this.post.deleteApiRow(data).subscribe((res:any)=>{
   console.log(res)
  })
  }

  doUpdate(data:any){
    this.post.updateData(this.userdata).subscribe((res:any)=>{
      console.log(res)
    })
    
  }
}



