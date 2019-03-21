import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../_global/models/character';
import { AttackModifierDeck } from '../_global/models/attackModifierDeck';
import { Attack } from '../_global/models/attack';
import { FormControl, FormGroup } from '@angular/forms';
import { Attacks } from '../_global/models/attacks';
import { trigger, transition, animate, style } from '@angular/animations';
import { AttackModifierCard } from '../_global/models/attackModifierCard';

@Component({
    selector: 'app-attack-modifier-simulator',
    templateUrl: './attack-modifier-simulator.component.html',
    styleUrls: ['./attack-modifier-simulator.component.scss'],
    animations: [
        trigger('slideInOut', [
          transition(':enter', [
            style({transform: 'translateX(1000%)'}),
            animate('0.25s ease-in', style({transform: 'translateX(0%)'}))
          ]),
          transition(':leave', [
            animate('0.25s ease-in', style({transform: 'translateX(-100%)'}))
          ])
        ])
      ]
})
export class AttackModifierSimulatorComponent implements OnInit {
    private routeParam: string;
    private footerHeight = 190;
    public roundCounter = 1;
    public windowHeight: number;
    public windowWidth: number;
    public attacksHeight: number;
    public character: Character = new Character();
    public deck: AttackModifierDeck;
    public attacks: Attacks;
    public cardHistoryVisible = false;
    public numpadEnabled = false;
    baseDamage = new FormControl('');

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.adjustHeights();
    }

    constructor(private activatedRoute: ActivatedRoute) {
        this.deck = new AttackModifierDeck();
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((routeParams) => {
            const characterName = routeParams.name;
            console.log(`Retrieving Character "${characterName}"...`);
            const storageCharacterJson = localStorage.getItem(`char:${characterName}`);
            this.character = JSON.parse(storageCharacterJson);
            console.log(`Loaded Character ${characterName}`);
            this.deck.mapCards(this.character.attackModifierDeck.cards);
            this.deck.shuffle();
            // Attach character to this deck
            this.deck.character = this.character;
            this.adjustHeights();
            // Set base damage
            this.baseDamage.setValue(0);
            this.attacks = new Attacks();
            this.attacks.reset(this.baseDamage.value);
        });
    }

    public baseDamageOnChange() {
        this.attacks.currentAttack.base = this.baseDamage.value;
    }

    public proceedToNextRound() {
        this.roundCounter++;

        if (this.deck.requiresShuffle) {
            this.deck.reshuffle();
        }

        this.attacks.reset(this.baseDamage.value);
    }

    public createNewAttack() {
        this.numpadEnabled = false;
        if (this.attacks.length >= 9) { return; }
        this.attacks.createAttack(new Attack(this.baseDamage.value));
        this.baseDamage.setValue(0);
        this.adjustHeights();
    }

    public toggleAdvantage() {
        if (this.deck.advantaged) {
            this.deck.advantaged = false;
            return;
        }
        this.deck.advantaged = true;
        this.deck.disadvantaged = false;
    }

    public toggleDisadvantage() {
        if (this.deck.disadvantaged) {
            this.deck.disadvantaged = false;
            return;
        }
        this.deck.advantaged = false;
        this.deck.disadvantaged = true;
    }

    public toggleCardHistory() {
        this.cardHistoryVisible = !this.cardHistoryVisible;
    }

    public clickNum(num: number){
        let baseDamageString = this.baseDamage.value.toString();
        baseDamageString += num.toString();
        const baseDamage = parseInt(baseDamageString);
        this.baseDamage.setValue(baseDamage);
    }

    public clickBackspace() {
        let baseDamageString = this.baseDamage.value.toString();
        baseDamageString = baseDamageString.slice(0, -1);
        const baseDamage = parseInt(baseDamageString) || 0;
        this.baseDamage.setValue(baseDamage);
    }

    private adjustHeights() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.outerWidth;
        this.attacksHeight = window.innerHeight - this.footerHeight;
    }

    public curse() {
        const curseCard = new AttackModifierCard();
        curseCard.multiplier = 0;
        curseCard.consumed = true;
        curseCard.name = "Curse";
        this.deck.curseCount++;
        this.deck.cards.push(curseCard.clone());
        this.deck.shuffle();
    }

    public bless() {
        const blessCard = new AttackModifierCard();
        blessCard.multiplier = 2;
        blessCard.consumed = true;
        blessCard.name = "Blessing";
        this.deck.blessCount++;
        this.deck.cards.push(blessCard.clone());
        this.deck.shuffle();
    }
}
