import { Post } from './post';
import { EjemploService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private lista: Post[] = [];

  ngOnInit() {
    this.ejemploService.listar().then(
      res => {
        this.lista = res;
      }
    );
  }

  constructor(private translateService: TranslateService, private ejemploService: EjemploService) {
    translateService.setDefaultLang('es');
  }
  switchLanguage(len: string) {
    this.translateService.use(len);
  }
}
