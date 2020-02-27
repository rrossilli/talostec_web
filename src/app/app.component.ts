import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  email = "rob@talostec.io"
  title = 'talostec';

  constructor(){
  }

  ngOnInit() {
  }

  showContactInfo(){
    window.location.href = "mailto:" + this.email;
  }

}
