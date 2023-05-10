import { Component } from '@angular/core';
import { CRUDService } from 'src/app/MyServices/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
public userData:any=[];
public formData:any=[];



constructor(private crud:CRUDService) {

}


getAPiSerData(){
  this.crud.getApiData().subscribe((res:any)=>{
    this.userData=res.data;
    console.warn(res)
    })
}

getPostApiData(){
this.crud.postApiData(this.userData).subscribe((res:any)=>{
 console.warn(res)
})
}

deleteSerData(){
  this.crud.deleteApiData().subscribe((res:any)=>{
    console.warn(res)
  })
}
putSerData(){
  this.crud.putApiData(this.userData).subscribe((res:any)=>{
   console.log(this.userData)
  })
}

onDelete(id:any){
  this.userData.splice(id,1)
  this.deleteSerData()
}

OnEdit(id:any){
  this.putSerData()
}
onSubmitBtn(formData:any){
this.formData.push(formData.value)
}
}
