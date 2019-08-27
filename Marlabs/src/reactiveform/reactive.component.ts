import {Component,OnInit} from '@angular/core';
import {FormBuilder ,FormGroup,FormArray,ReactiveFormsModule} from '@angular/forms';
import { User } from "src/reactiveform/reactive";

@Component({
  selector:'reactive-app',
  templateUrl: './reactive.component.html',
  styleUrls:['./reactive.component.css']
})

export class ReactiveComponent implements OnInit
{

    user = new User();
    registerForm:FormGroup;
    constructor(private fb:FormBuilder){

    }
    ngOnInit(): void {
       this.registerForm= this.fb.group({
       firstname:'',

        username:''
       })
       }

save(){
console.log(this.registerForm.value)
console.log('save data' + JSON.stringify(this.registerForm.value))
window.alert(JSON.stringify(this.registerForm.value));  
            data =>{ console.log('Success!!',data)
}
}
}