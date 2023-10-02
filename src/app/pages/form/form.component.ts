import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs'




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  todoValue: string = '';
  comment: any;
  firstApiResult: any;
  secondApiResult: any;

  selectedApi: string = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.sendData();
  }

  sendData(): void {
       // Create a new object to represent the data that you want to post
    const data = {
      date: new Date(),
      message: this.todoValue
    };

    // Get the selected API
    const selectedApi = this.selectedApi;

    // Call the post() method on the http client, passing in the endpoint URL and the data object
    if (selectedApi === 'firstApi') {
      this.http.post('http://collector.monitor.nl/Collector', data).subscribe();
    } else if (selectedApi === 'secondApi') {
      this.http.post('https://api2.example.com/endpoint', data).subscribe();
    }
  }
}