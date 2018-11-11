import { BrowseProductsModule } from './browse-products.module';

describe('BrowseProductsModule', () => {
  let browseProductsModule: BrowseProductsModule;

  beforeEach(() => {
    browseProductsModule = new BrowseProductsModule();
  });

  it('should create an instance', () => {
    expect(browseProductsModule).toBeTruthy();
  });
});
