import { Category } from "../model/Category";

// DTO - Data transfer object - objeto que é responsavel pela transferencia de uma classe e outra
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // void não vai ter retorno a função
  create({description, name}: ICreateCategoryDTO): void {

    const category = new Category();

   // maneira de atribuição convencional
  // category.name = name;
  // category.description = description;
  // category.created_at = new Date();
  // função nativa do js passar um objeto e passar os atributos item a item
    Object.assign(category, {
      name, 
      description,
      created_at: new Date()
    });
  
  
    this.categories.push(category);
  }
}

export {CategoriesRepository} ;