import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() children: String[];
  @Input() name: String;
  @Input() itemName: String;

  searchText: String;
    
  constructor() {}

  public ngOnInit() {
  	 this.searchText = "Search " + this.itemName + "s...";
  }
}
