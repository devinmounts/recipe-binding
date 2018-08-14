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
