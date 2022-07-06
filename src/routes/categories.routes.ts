import { Router } from "express";
import { v4 as uuidV4 } from 'uuid';
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description} = request.body;

  const category = new Category();
  // função nativa do js passar um objeto e passar os atributos item a item
  Object.assign(category, {
    name, 
    description,
    created_at: new Date()
  });

  // maneira de atribuição convencional
  // category.name = name;
  // category.description = description;
  // category.created_at = new Date();

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };

