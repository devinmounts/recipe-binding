import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  recipies: Recipe[] = [
    new Recipe('Flan', ['Condensed Milk', 'Sugar', 'Cinnamon'], ['Mix Milk, sugar, and cinnamon', 'Bake at 400 for 15 min', 'Eat'], 3),
    new Recipe('Boiling Water', ['cold water'], ['add heat'], 1),
    new Recipe('Peanut Butter and Jealous', ['Bread', 'Peanut Butter', 'Jealousy'], ['Apply Peanut Butter and Jealousy to Bread', 'taunt your friends with your awesome sandwich', 'Eat'], 6)
  ];

  editTask(){
    alert("EditMe")
  }

  priorityColor(currentRecipe) {
    if (currentRecipe.priority === 1) {
      return "bg-danger";
    } else if (currentRecipe.priority >=2 && currentRecipe.priority <=4){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
