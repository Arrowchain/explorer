import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'explorer';

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    console.log('loaded')
    this.apiService.getBlock('1000').subscribe((response) => {
      console.log(response)
    })
  }
}
