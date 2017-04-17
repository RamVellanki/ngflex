import { NgflexPage } from './app.po';

describe('ngflex App', () => {
  let page: NgflexPage;

  beforeEach(() => {
    page = new NgflexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
