import { NssPage } from './app.po';

describe('nss App', () => {
  let page: NssPage;

  beforeEach(() => {
    page = new NssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
