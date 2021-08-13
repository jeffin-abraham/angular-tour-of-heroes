import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() shoppingListItem?: String;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit has run for child component")
  }

}
