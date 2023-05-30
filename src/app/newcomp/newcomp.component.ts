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
constructor(private rout:Router, private ds:DataService){

}
ngOnInit():void{
 this.serviceData= this.ds.sdata
 console.log(this.serviceData);
 this.ds.smethod()
 
}

login(){
  alert("login clicked")
  this.rout.navigateByUrl("home") 
}
acnochange(event:any){
  console.log(event.target.value);
  
}

}
