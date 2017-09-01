import { browser, by, element } from 'protractor';

export class TranslatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tr-root h1')).getText();
  }
}
