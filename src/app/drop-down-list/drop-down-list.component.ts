import { AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import LocalAreas from '../data/areas.json';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChildren('listItem') listElms!: QueryList<ElementRef>;

  areaList: [] = LocalAreas;
  selectedIndex: number = 0;

  navigateList(dir: string) {

    var listLength = this.areaList.length;
    if (dir === "down") {

      if ((this.selectedIndex + 1) === listLength) {
        this.selectedIndex = 0;
      }
      else {
        this.selectedIndex++;
      }
    }
    if (dir === "up") {
      if (this.selectedIndex === 0) {
        this.selectedIndex = (listLength - 1);
      }
      else {
        this.selectedIndex--;
      }
    }
    this.listElms.toArray()[this.selectedIndex].nativeElement.focus();
  };

  getItem(item: string) {
    console.log(item, "clicked");
  };

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.selectedIndex = 0;
    this.listElms.toArray()[this.selectedIndex].nativeElement.focus();
  }
}
