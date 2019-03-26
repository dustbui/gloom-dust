import { Component, OnInit } from '@angular/core';
import { themes } from '././_global/themes/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GloomDust';
  private elem;

  public ngOnInit() {
    this.setTheme('Default');
    this.elem = document.documentElement;
    // this.requestFullscreen();
  }

  public setTheme(themeName: string) {
    const theme = themes[themeName];

    Object.keys(theme).forEach((property, i) => {
      document.querySelector('html').style.setProperty(property, theme[property]);
    });
  }

  private requestFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
}

