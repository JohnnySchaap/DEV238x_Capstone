import { Subcategory } from "./subcategory";

export interface Assortment {
  category: string;
  subcategories: Subcategory[];
}
