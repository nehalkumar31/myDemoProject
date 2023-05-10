import { Component } from '@angular/core';
import { NewCrudService } from 'src/app/MyServices/new-crud.service';

@Component({
  selector: 'app-crud-new',
  templateUrl: './crud-new.component.html',
  styleUrls: ['./crud-new.component.css']
})
export class CrudNewComponent {
  public allData:any;


  constructor(private api:NewCrudService){
    this.getData();
  }

  onsubmitBtn(data:any){
    this.api.postApiData(data.value).subscribe((res:any)=>{
      console.log(res)
    })
  }

  getData(){
    this.api.getApiData().subscribe((res:any)=>{
    this.allData=res;
    })
  }

  deleteData(data:any){
    this.api.deleteApiData(data).subscribe((res:any)=>{
      console.log(res)
    })
  }

  
}

