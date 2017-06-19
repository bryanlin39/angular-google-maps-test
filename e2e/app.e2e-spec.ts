import { GoogleApiPage } from './app.po';

describe('google-api App', () => {
  let page: GoogleApiPage;

  beforeEach(() => {
    page = new GoogleApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
