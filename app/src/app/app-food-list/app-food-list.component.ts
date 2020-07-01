import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {

  foods: Object[];
  myList: {
    name: string;
    calories: number;
    quantity: number;
    image: string;
  }[] = [];
  pattern: string;
  isEditing: boolean = false;
  newFoodName: string = 'Food Name';
  newFoodCalories: number = 98;
  newFoodImage: string = 'https://pngimg.com/uploads/milk/milk_PNG12762.png';
  quantity: number;
  totalCalories: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
