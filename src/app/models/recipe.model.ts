export class Recipe {
  public cooked: boolean = false;
   constructor(public title: string, public ingredients: [{ingredient: string}], public directions: [{direction: string}], public priority: number ) {}
}
