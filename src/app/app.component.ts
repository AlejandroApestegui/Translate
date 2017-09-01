import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('es');
  }
  switchLanguage(len:string) {
      this.translateService.use(len);
  }
}
