import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ResponseModel } from '../utils/responseModel';
@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent implements OnInit {
  results:ResponseModel = {addressList: [], totalRecordings: 0};
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    var info = {
      "textInput": "george",
      "addressType": 0,
      "page": 0,
      "limit": 3
    }

    // this.homeService.sendInfo(info).subscribe(valoare => console.log(valoare));
    this.homeService.sendInfo(info).subscribe(valoare => this.results = valoare as ResponseModel);
  }
}
