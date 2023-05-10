import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
public allData:any=[];
public idd:any;
public un:any;
public eml:any;
public ps:any;
public count:number=1;
public showTable:boolean=false;




  onsubmitbtn(data:any){
    if(data.value.id==undefined){
      data.value.id = this.count;
      this.allData.push(data.value);
      if(this.allData.length>0){
        this.showTable=true;
      }this.count++
      
    }else{
      this.allData.forEach((element:any) => {
          if(data.value.id == element.id){
            element.uname=data.value.uname
            element.email=data.value.email
            element.pass=data.value.pass
          }
        });
      }
   
  }
  onupdate(data:any){
    this.idd = data.id
    this.un = data.uname
    this.eml = data.email
    this.ps = data.pass

  }
  ondelete(data:any){
   this.allData.forEach((element:any , index:any) => {
    if(element.id == data.id){
      this.allData.splice(index , 1);
    }
   });
   if(this.allData.length==0){
    this.showTable=false;
   }
  }
}
