import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pagination';
  resData:any;

  current_page: number= 1;
  seaching:any = "";
  config:any = {
    itemsPerPage: [],
    currentPage: [],
    totalItems: []
  }; 
    
  constructor(private service:DataService) {}
  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.read(this.current_page)
      .subscribe((res: any) => {
        this.resData = res['data'];
        this.config.itemsPerPage=res['per_page'];
        this.config.totalItems=res['total'];
        this.config.currentPage=res['current_page'];
      });
  } 
  bsearch():void{
    this.service.search(this.seaching).subscribe(res => {
      this.resData = res;
    })
  }
  clear(){
    this.seaching ="";
    this.getData();
  }

  pageChanged(event:any){
    this.service.read(this.config.currentPage = event).subscribe((res:any) => {
      this.resData = res["data"];
    })
  }

}
