import { Component, Input } from '@angular/core';
import { ngquocthPersonal } from '../classNgquocth';

@Component({
  selector: 'app-ngquocth-about',
  templateUrl: './ngquocth-about.component.html',
  styleUrl: './ngquocth-about.component.css'
})
export class NgquocthAboutComponent {

  @Input() ngquocthMe!: ngquocthPersonal;



  //ngStyle
  aboutName = {
    'font-style': 'italic',
    'background-color': 'navy', 
    'color': 'red', 

  };

  aboutEmail = {
    'text-decoration': 'underline',
    'color': 'green' 
  };


  aboutCampus = {
    'color': 'blue' 

  };





}
