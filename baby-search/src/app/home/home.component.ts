import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  private query;
  private query_status:boolean = false;
  private result_search = [];
  private length_doc;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  searchQuery(){
    let creds = JSON.stringify({query: this.query})
    this.data.post(this.data.base_url+'retrieve/retrieving', creds)
    .subscribe(
      response =>{
        if(response.status){
          console.log("berhasil data: ", response.result[0])
          this.result_search = response.result[0]
          this.query_status = true;
          this.length_doc = this.result_search.length
          console.log(this.length_doc)
        }

      }
    )
    console.log('hasil query', creds)
  }


}
