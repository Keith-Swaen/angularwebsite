import { TranslateService } from '@ngx-translate/core';
import { Component, Inject } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularwebsite';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  
}


