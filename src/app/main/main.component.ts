import { Component, OnInit, HostListener } from '@angular/core';
import { Character } from '../_global/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public characters: Character[] = [];
  public windowHeight: number;
  public createCharacterActions = [
    { label: 'Get Started', route: 'characterCreation' }
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.adjustHeights();
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.adjustHeights();
    const characterStorage = localStorage.getItem('characters');
    if (characterStorage) {
      const characterKeys = characterStorage.split(',');
      characterKeys.forEach(characterKey => {
        const characterJson = localStorage.getItem(`char:${characterKey}`);
        if (!characterJson) { return; }
        const character = JSON.parse(characterJson);
        this.characters.push(character);
      });
    }
  }

  public createCharacter() {
    this.router.navigate(['characterCreation']);
  }

  private adjustHeights() {
    this.windowHeight = window.innerHeight;
  }

}
