import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist'] // TODO
})
export class ArtistItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
