import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  testBool: Boolean =true;

  shoppingList: String[] = [
    "Milk",
    "Bread",
    "Coffee",
    "Chips",
    "Chicken"
  ];

  toggleTestBool(){
    if(this.testBool){
      this.testBool = false;
    }
    else{
      this.testBool = true;
    }
    console.log("this.testBool is: ", this.testBool)
  }

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit has run for parent component")
  }

  ngOnChanges(): void {
    console.log("Something has changed in parent component")
  }

  // ngOnChanges(): {

  // }

}
