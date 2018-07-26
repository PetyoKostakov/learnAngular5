import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Welcome to {{ title }}!</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app alabala';
  query: string;
  artists: object;
  currentArtist: object;

  constructor(private http: HttpClient) {
    this.query = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.artists = data;
    });
  }

  showArtist(artist) {
    this.currentArtist = artist;
    this.query = artist.name;
    artist.highlight = !artist.highlight;
  }
}
