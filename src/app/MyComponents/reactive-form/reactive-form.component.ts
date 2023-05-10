import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
public myForm:any;
public submitted:boolean=false;

constructor(private fb:FormBuilder){
  this.myForm= this.fb.group({
    uname:['' ,[Validators.required]],
    email:['',[Validators.required ,Validators.email]],
    pass:['' ,[Validators.required]],

  })
}

onsubmitbtn(){
console.log(this.myForm.value);
this.submitted=true;
}
}

