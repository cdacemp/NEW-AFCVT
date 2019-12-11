import { Component, OnInit } from '@angular/core';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';
@Component({
  selector: 'app-super-sidebar',
  templateUrl: './super-sidebar.component.html',
  styleUrls: ['./super-sidebar.component.css']
})
export class SuperSidebarComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit() {
  }

}



