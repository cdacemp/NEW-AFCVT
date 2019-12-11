import { Component, OnInit } from '@angular/core';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';
@Component({
  selector: 'app-super-toggle',
  templateUrl: './super-toggle.component.html',
  styleUrls: ['./super-toggle.component.css']
})
export class SuperToggleComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService) { }

  ngOnInit() {
  }

}
