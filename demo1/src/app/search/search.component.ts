import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      search: ['', [Validators.required]],
    });



  }

  searchData() {
      console.log("here")

  }



}
