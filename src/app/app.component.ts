import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  masterRecipies: Recipe[] = [
    new Recipe('Flan', [{ingredient: 'Condensed Milk'}, {ingredient: 'Sugar'}, {ingredient: 'Cinnamon'} ], [{direction: 'Mix Milk, sugar, and cinnamon'}, {direction: 'Bake at 400 for 15 mi'}, {direction: 'Eat'}], 2),
    new Recipe('Boiling Water',[{ingredient: 'cold water'}], [{direction: 'add heat'}], 1),
    new Recipe('Peanut Butter and Jealous',[{ingredient: 'Bread'}, {ingredient: 'Peanut Butter'}, {ingredient: 'Jealousy'}], [{direction: 'Apply Peanut Butter and Jealousy to Bread'}, {direction: 'taunt your friends with your awesome sandwich'}, {direction: 'Eat'}], 3)
  ];

  selectedRecipe = null;

  


  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing(){
    this.selectedRecipe = null;
  }

}
