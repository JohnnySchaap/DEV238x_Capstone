import { Item } from './item';

export interface Subcategory {
  name: string;
  selected: boolean;
  items: Item[];
}
