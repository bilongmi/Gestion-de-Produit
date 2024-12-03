import Category from "./Category";

export default class Product {
    id!: number;
    nom!: string;
    description!: string;
    prix!: number;
    category!: Category;
    dateCreation!: Date;
}