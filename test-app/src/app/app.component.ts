// import { Component, OnInit } from '@angular/core';
// import { EmailService } from './services/email.service'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent implements OnInit {
//   name = 'john';

//   constructor(private emailService: EmailService) { }

//   ngOnInit() {
//     this.name = this.emailService.addEmail(this.name);
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = `http://echo.jsontest.com/key/value/one/two`;
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
  }
}

