import { Component, Input } from '@angular/core';
import { ngquocthCountry } from '../classNgquocth';

@Component({
  selector: 'app-ngquocth-country',
  templateUrl: './ngquocth-country.component.html',
  styleUrl: './ngquocth-country.component.css'
})
export class NgquocthCountryComponent {

  @Input() ngquocthData!: ngquocthCountry;





}
