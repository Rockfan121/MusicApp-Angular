import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    
  constructor(private breakpointObserver: BreakpointObserver) {}

  public ngOnInit() {
  	 this.searchText = "Search " + this.itemName + "s...";
  }
}
