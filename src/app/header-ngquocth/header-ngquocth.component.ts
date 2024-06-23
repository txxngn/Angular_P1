import { Component , Input} from '@angular/core';
import { ngquocthPersonal } from '../classNgquocth';

@Component({
  selector: 'app-header-ngquocth',
  templateUrl: './header-ngquocth.component.html',
  styleUrl: './header-ngquocth.component.css'
})
export class HeaderNgquocthComponent {
  
  

  @Input() ngquocthChild! : ngquocthPersonal; // @Input() childVariable: Class name


  cdate = new Date();


  headerStyle = {
    'color': 'white',
    'background-color': 'blue',
    'text-align': 'center',
    'font-variant': 'small-caps'
  };

  
}
