
import { Component} from '@angular/core';
import { RecordsService } from "src/app/records.service";
import { Records } from "src/app/records";


@Component({
  selector:'practice-app',
  templateUrl: './practice.component.html'

})
export class PracticeComponent{
//records ={}
records :Records[]=[];


 constructor (private myFirstService :RecordsService){
   
 }

 ngOnInit(){
this.myFirstService .getData().subscribe(
records =>{

 this.records=records;
}

)
//this.records =this.myFirstService.getData()
 }


 }