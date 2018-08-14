import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() clickedDone = new EventEmitter();


  finishedEditing(){
    this.clickedDone.emit();
  }

}
