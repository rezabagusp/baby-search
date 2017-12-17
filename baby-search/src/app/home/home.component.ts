import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private query;

  constructor() { }

  ngOnInit() {
  }

  searchQuery(){
    console.log('hasil query', this.query)
    
  }


}
