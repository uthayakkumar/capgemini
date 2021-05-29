import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  searchFilter = new FormControl();
  term;

  menus = ['All', 'Financial', 'Technical', 'Marketing', 'Human Resources'];
  documents = [
    {title: 'Technical', value:'Terminal instructables'},
    {title: 'Technical', value:'Installation guides'},
    {title: 'Human Resources', value:'Career opportunities'},
    {title: 'Financial', value:'Customer onboarding'},
    {title: 'Marketing', value:'Outlet branding'},
    {title: 'Financial', value:'Accounting procedures'},
    {title: 'Human Resources', value:'Training'},
    {title: 'Marketing', value:'Printing guidance'},
    {title: 'Technical', value:'Technical support'}
  ]
  docCategory: string;
  selectedItem: string = 'All';
  constructor() { }

  ngOnInit(): void {
  }

  updateCategory(stringCategory: string) {
    this.docCategory = stringCategory;
    this.selectedItem = stringCategory;
    }
}
