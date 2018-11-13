import { ShoppingModule } from "src/app/pages/browse-products/shopping.module";

describe('ShoppingModule', () => {
  let ShoppingModule: ShoppingModule;

  beforeEach(() => {
    ShoppingModule = new ShoppingModule();
  });

  it('should create an instance', () => {
    expect(ShoppingModule).toBeTruthy();
  });
});
