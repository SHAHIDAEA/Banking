import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})


export class NewcompComponent {
  data="happy banking with us"
  pdata="enter account no"
constructor(private rout:Router){

}

login(){
  alert("login clicked")
  this.rout.navigateByUrl("home")
}
acnochange(event:any){
  console.log(event.target.value);
  
}

}
