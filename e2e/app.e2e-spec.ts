import { Angular2GoogleMapsPage } from './app.po';

describe('angular2-google-maps App', function() {
  let page: Angular2GoogleMapsPage;

  beforeEach(() => {
    page = new Angular2GoogleMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
