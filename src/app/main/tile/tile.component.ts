import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/_global/models/character';
import { TileAction } from 'src/app/_global/models/tileAction';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tileName: string;
  @Input() actions: TileAction[];
  @Input() character: Character;
  @Input() remove: Function;
  @Output() removedCharacter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public removeCharacter(characterName: string) {
    // Remove from characters list
    let characterStorage = localStorage.getItem('characters');
    let characterArray = characterStorage.split(',');
    const characterIndex = characterArray.findIndex((x) => { return x == characterName });
    characterArray.splice(characterIndex, 1);
    localStorage.setItem('characters', characterArray.join(','));

    // Remove specific character from local storage
    localStorage.removeItem(`char:${characterName}`);

    // Emit event to parent to remove from array
    this.removedCharacter.emit(characterName);
  }

  public promptRemove(characterName: string) {
    if (confirm(`Are you sure you want to delete ${characterName}?`)) {
      this.removeCharacter(characterName);
    }
  }
}
