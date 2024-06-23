import { Component ,Input} from '@angular/core';
import { ngquocthPersonal, ngquocthCountry } from '../classNgquocth';

@Component({
  selector: 'app-ngquocth-pics',
  templateUrl: './ngquocth-pics.component.html',
  styleUrl: './ngquocth-pics.component.css'
})
export class NgquocthPicsComponent {

  
  @Input() picPER!: ngquocthPersonal;
  @Input() picCTR!: ngquocthCountry;



}
