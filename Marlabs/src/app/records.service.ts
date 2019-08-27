import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { Records } from "src/app/records";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

 constructor(private  abc :HttpClient) { }
recordurl= "./data/ser.json"
 getData():Observable<Records[]>{

return this.abc.get<Records[]>(this.recordurl).pipe(
tap(abc => console.log('records' +JSON.stringify(abc))),

 )
}
}
// getData(){


//   return [

//       {

// "name": "megha",
// "online":"true"
//     },

// {
//   "name": "pooja",
// "online": "false"
// },
// {
// "name": "chandana",
// "online":"true"
// },
// {
// "name": "nupur",
// "online": "false"
// }

//   ] 
// }


//}

