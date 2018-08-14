import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  // recipies: Recipe[] = [
  //   new Recipe('Flan', [{ingredient: 'Condensed Milk'}, {ingredient: 'Sugar'}, {ingredient: 'Cinnamon'} ], [{direction: 'Mix Milk, sugar, and cinnamon'}, {direction: 'Bake at 400 for 15 mi'}, {direction: 'Eat'}], 2),
  //   new Recipe('Boiling Water',[{ingredient: 'cold water'}], [{direction: 'add heat'}], 1),
  //   new Recipe('Peanut Butter and Jealous',[{ingredient: 'Bread'}, {ingredient: 'Peanut Butter'}, {ingredient: 'Jealousy'}], [{direction: 'Apply Peanut Butter and Jealousy to Bread'}, {direction: 'taunt your friends with your awesome sandwich'}, {direction: 'Eat'}], 3)
  // ];

  recipeToShow = null;

  showRecipe(clickedRecipe){
    if(this.recipeToShow == clickedRecipe){
      this.recipeToShow = null;
    } else {
      this.recipeToShow = clickedRecipe;
    }
    ;
  }

  priorityColor(currentRecipe) {
    if (currentRecipe.priority == 3) {
      return "bg-danger";
    } else if (currentRecipe.priority == 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }
}
