import { Pizza } from './pizza';
import { OnlineResource } from "./online-resource";

describe('Pizza', () => {
  it('should create an instance', () => {
    const pizza: Pizza = new Pizza(
      "Hawaii",
      "lorem ipsum",
      ["Ham", "Cheese", "Pineapple"],
      4.99,
      new OnlineResource(
        "https://placeholder.com/image.jpeg",
        "placeholder image"
      )
    );
    expect(pizza).toBeTruthy();
  });
});
