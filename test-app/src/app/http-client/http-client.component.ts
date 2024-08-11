import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css',
})
export class HttpClientComponent implements OnInit {
  getJsonValue: any;
  postJsonVlaue: any;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  getMethod() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        console.log(data);
        this.getJsonValue = data;
      });
  }

  postMethod() {
    const header = new HttpHeaders({
      contentType: 'application/json',
    });

    let body = {
      title: 'Joy',
      body: 'Das',
      userId: 1,
    };
    this.httpClient
      .post('https://jsonplaceholder.typicode.com/posts', body, {
        headers: header,
      })
      .subscribe((data) => {
        console.log(data);
        this.postJsonVlaue = data;
      });
  }
}
