import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno:any
  uname:any
  psw:any
  cpsw:any

  signup(){
var acno=this.acno
var uname=this.uname
var psw=this.psw
var cpsw=this.cpsw
  }

}