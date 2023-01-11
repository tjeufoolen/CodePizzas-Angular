import { OnlineResourceModel } from './onlineResource.model';

export interface PizzaModel {
    title: string;
    description: string;
    ingredients: string[];
    price: number;
    thumbnail: OnlineResourceModel;
}
