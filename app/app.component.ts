import { Component, OnInit } from '@angular/core';
import { themes } from '././_global/themes/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GloomDust';

  public ngOnInit() {
    this.setTheme('Default');
  }

  public setTheme(themeName: string) {
    const theme = themes[themeName];

    Object.keys(theme).forEach((property, i) => {
      document.querySelector('html').style.setProperty(property, theme[property]);
    });
  }
}

