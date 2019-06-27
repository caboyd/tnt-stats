import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Match} from "@tnt-stats/data";


@Component({
  selector: 'tnt-stats-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  matches: Match[];

  constructor(private http: HttpClient) {
    this.fetch();

  }

  fetch(){
    this.http.get('/api/matches').subscribe((m:any) => (this.matches = m));
  }

  addReplay(){
    this.http.post('/api/add', {}).subscribe(() => {
      this.fetch();
    })
  }
}
