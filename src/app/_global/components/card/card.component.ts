import { Component, OnInit, Input } from '@angular/core';
import { AttackModifierCard } from '../../models/attackModifierCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: AttackModifierCard;
  @Input() width = 200;
  public height: number;

  constructor() {
  }

  ngOnInit() {
    console.log(this.card);
    this.height = this.width * 0.675;
  }

}
