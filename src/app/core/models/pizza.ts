import { OnlineResource } from "./online-resource";

export class Pizza {
  private _title: string;
  private _description: string;
  private _ingredients: string[];
  private _price: number;
  private _thumbnail: OnlineResource;

  public constructor(title: string, description: string, ingredients: string[], price: number, thumbnail: OnlineResource) {
    this._title = title;
    this._description = description;
    this._ingredients = ingredients;
    this._price = price;
    this._thumbnail = thumbnail;
  }

  public get title() {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get ingredients(): string[] {
    return this._ingredients;
  }

  public set ingredients(value: string[]) {
    this._ingredients = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }

  public get thumbnail(): OnlineResource {
    return this._thumbnail;
  }

  public set thumbnail(value: OnlineResource) {
    this._thumbnail = value;
  }
}
