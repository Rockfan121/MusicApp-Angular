import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() children: string[];
  @Input() name: String;
  @Input() itemName: String;

  myControl = new FormControl();
  searchText: String;
  filteredItems: Observable<string[]>;
    
  constructor() {}

  public ngOnInit() {
  	 this.searchText = "Search " + this.itemName + "s...";

     this.filteredItems = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

    _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.children.filter(option => option.toLowerCase().includes(filterValue));
  }
}
