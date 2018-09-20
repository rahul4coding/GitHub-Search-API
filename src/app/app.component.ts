import { Component, OnInit } from '@angular/core';
import {GitSearchService} from './git-search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit{
  
  constructor(private _GitSearchService: GitSearchService){}
  ngOnInit() {
    // this._GitSearchService.gitSearch('angular').then( (response:any) => {
    //   alert("Total Libraries Found:" + response.total_count);
    // }, (error) => {
    //   alert("Error: " + error.statusText)
    // })
  }

  

  title = 'app is functional';
}
