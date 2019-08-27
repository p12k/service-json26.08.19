
import { Component} from '@angular/core';
import { Register } from "../register/register";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms/forms";

@Component({
  selector:'register-app',
  templateUrl: './register.component.html',
styleUrls:['./register.component.css']
})
export class RegisterComponent   {
register= new Register();
  constructor(private router:Router){}
   save(registerForm:NgForm){
        console.log(registerForm.form);
        console.log('save data' + JSON.stringify(registerForm.value))
        window.alert(JSON.stringify(registerForm.value));  
            data =>{ console.log('Success!!',data)
    }
  }
  users(){
 this.router.navigate(['/learn'])

  }
 }  