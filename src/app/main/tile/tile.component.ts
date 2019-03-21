import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
