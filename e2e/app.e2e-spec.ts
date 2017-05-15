import { HerosTutorialPage } from './app.po';

describe('heros-tutorial App', function() {
  let page: HerosTutorialPage;

  beforeEach(() => {
    page = new HerosTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

