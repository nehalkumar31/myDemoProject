import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public showtext:boolean=false;
  public age:number=18;
  public states:any='goa'
  public allData:any=[{
    name:'Nehalkumar',
    surname:'Rajput',
    age:25,
    skill: 'html,css,bs,js,ts,ng'
  }]
constructor(){
  if(this.age>15){
    this.showtext=true;
  }
}
}
