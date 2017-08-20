import { Angular2MyCrudPage } from './app.po';

describe('angular2-my-crud App', () => {
  let page: Angular2MyCrudPage;

  beforeEach(() => {
    page = new Angular2MyCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
