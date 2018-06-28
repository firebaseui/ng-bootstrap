import {NgBootstrapAuthFirebaseuiDemoPage} from './app.po';

describe('ng-bootstrap-auth-firebaseui-demo App', () => {
  let page: NgBootstrapAuthFirebaseuiDemoPage;

  beforeEach(() => {
    page = new NgBootstrapAuthFirebaseuiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
