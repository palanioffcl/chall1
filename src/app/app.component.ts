import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'Challenge 1';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllEmployees().subscribe({
      next: (data) => {
        // console.log(data);
      },
    });
}
}