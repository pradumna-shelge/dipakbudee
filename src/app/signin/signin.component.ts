import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  userForm!: FormGroup;
constructor(private fb :FormBuilder){
this.userForm = this.fb.group({
name:[],
email:[],
password:[],

})
}   
}
