import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public showBackNav() {
    // console.log(`Current nav: ${this.router.url}`);
    if (this.router.url === "/#/") {
      return false;
    }
    return true;
  }

}
