
import { Component} from '@angular/core';
import { Learn } from "../learn/learn";
import { NgForm } from "@angular/forms/forms";
import { Router } from "@angular/router";

@Component({
  selector:'learn-app',
  templateUrl: './learn.component.html',
styleUrls:['./learn.component.css']
})
export class LearnComponent{
register= new Learn();

constructor(private router:Router){}
save(registerForm:NgForm){
console.log(registerForm.form);
console.log('save data' +JSON.stringify(registerForm.value))
   window.alert(JSON.stringify(registerForm.value));  
            data =>{ console.log('Success!!',data)}
  
}
 }


 // users(){
 //this.router.navigate(['/learn'])
