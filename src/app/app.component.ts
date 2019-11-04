import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing';
  constructor(
    private translate: TranslateService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer

  ) {
    translate.setDefaultLang('en');
    translate.use('en');
    iconRegistry
      .addSvgIcon('ic-menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'))
      .addSvgIcon('ic-fb', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb-icon.svg'))
      .addSvgIcon('ic-tw', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tw-icon.svg'))
      .addSvgIcon('ic-ig', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ig-icon.svg'))
      .addSvgIcon('ic-arrow-bottom', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-bottom.svg'))
      .addSvgIcon('ic-arrow-right', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-right.svg'))
      .addSvgIcon('ic-arrow-left', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-left.svg'))
  }
}
