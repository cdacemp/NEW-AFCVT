import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afcvtproject';
  getUrl() {
    return "url('images/login-image1.jpg')";
  }
}
