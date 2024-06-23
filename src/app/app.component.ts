import { Component } from '@angular/core';
import { ngquocthPersonal, ngquocthCountry } from './classNgquocth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1ngquocth';




  //parent variable = class type {};
  //create a new variable called PERyourloginname that is based on the Personal Class 
  PERngquocth: ngquocthPersonal = {
    ngquocthName: "Thai Nguyen", ngquocthID: 991720991, ngquocthLoginName: "ngquocth",
    ngquocthEmail: "ngquocth@shernet.sheridancollege.ca", ngquocthCampus: "Davis", ngquocthImageName: "bulbasaur"
  };

  //create a new variable called CTRYyourloginname
  CTRYngquocth: ngquocthCountry = {ngquocthCountry: "Vietnam", ngquocthCountryId: 704, ngquocthCapital: "Hanoi",
    ngquocthASalary: 304, ngquocthFlag: "VietnamFlag"};




}

