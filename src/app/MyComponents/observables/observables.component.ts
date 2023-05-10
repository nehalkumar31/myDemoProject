import { Component, Pipe } from '@angular/core';
import { ɵafterNextNavigation } from '@angular/router';
import { Observable, Subscription, filter , of, pipe } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
 public array:any=[1,2,3,4,5,6,7,8,9];
 public array1:any=[];


 


constructor(){

  
const observable= new Observable((sub)=>{
  // console.log('obserbables')
  sub.next('[1,2,3,4,5]')
});
observable.pipe(
  filter((x:any) => x >5)
)
.subscribe((res:any)=>{
  console.log(res)
})
}


}







