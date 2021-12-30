import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  adressType=0;
  submitted=false;

  @ViewChildren('checkboxes')
  checkboxes!: QueryList<ElementRef>;
  constructor(
    private formbuilder: FormBuilder,
    private homeService: HomeService

  ) { }

  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      search: ['sdaads', [Validators.required]],
    });



  }

  //Note: 1-> primary, 2->secondary, 0-> both

  setBoth($event: any){
    this.checkboxes["_results"][0].nativeElement.checked=false;
    this.checkboxes["_results"][1].nativeElement.checked=false;
    this.adressType=0;

  }
  setPrimary(event: any){
    this.checkboxes["_results"][1].nativeElement.checked=false;
    this.checkboxes["_results"][2].nativeElement.checked=false;
    this.adressType=1;

  }

  setSecondary($event: any){
    this.checkboxes["_results"][0].nativeElement.checked=false;
    this.checkboxes["_results"][2].nativeElement.checked=false;
    this.adressType=2;
  }

  searchData() {
    this.submitted=true;
    if (this.searchForm.invalid) {
      return;
    }
    const info = {
      "textInput": this.searchForm.get("search")?.value,
      "addressType": this.adressType,
      "page": 0,
      "limit": 3
    }
    this.homeService.sendInfo(info).subscribe(valoare => console.log(valoare));
    this.searchForm.reset()
    

  }



}
