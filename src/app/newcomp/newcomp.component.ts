import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})


export class NewcompComponent implements OnInit{
  data="happy banking with us"
  pdata="enter account no"
  serviceData:any
acno:any
psw:any


constructor(private rout:Router, private ds:DataService){

}
ngOnInit():void{
 console.log(this.serviceData);
 
}

login(){
//   alert("login clicked")
//   this.rout.navigateByUrl("home") 
// }
// acnochange(event:any){
//   console.log(event.target.value);

// console.log(this.acno);
// console.log(this.psw);
var acno=this.acno
var psw=this.psw
this.ds.login(acno,psw).subscribe((result:any)=>{
  alert(result.message)
    this.rout.navigateByUrl("home") 

},
result=>{
  alert(result.error.message)
}
)


  
}

}
