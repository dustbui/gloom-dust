import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../_global/models/character';
import { AttackModifierDeck } from '../_global/models/attackModifierDeck';
import { Attack } from '../_global/models/attack';
import { FormControl, FormGroup } from '@angular/forms';
import { Attacks } from '../_global/models/attacks';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { Bless, Curse } from '../_global/data/attackModifierCards';
import * as Cards from '../_global/data/attackModifierCards';

@Component({
    selector: 'app-attack-modifier-simulator',
    templateUrl: './attack-modifier-simulator.component.html',
    styleUrls: ['./attack-modifier-simulator.component.scss'],
    animations: [
        trigger('slideUp', [
            transition(':enter', [
                query('.drawn-card', [
                    style({ transform: 'translateY(1000%)' }),
                    stagger('300ms', [
                        animate('0.33s ease-out', style({ transform: 'translateY(0%)' }))
                    ])
                ])
            ]),
            transition(':leave', [
                animate('0.33s ease-out', style({ transform: 'translateY(-100%)' }))
            ])
        ]),
        trigger('slideUpAndBackOut', [
            transition(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('0.2s ease-out', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                animate('0.2s ease-out', style({ transform: 'translateY(100%)' }))
            ])
        ]),
        trigger('slideFromRight', [
            transition(':enter', [
                query('.gh-icon', [
                    style({ transform: 'translateX(1000%)', opacity: 0 }),
                    stagger('500ms', [
                        animate('0.25s 1s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
                    ])
                ], { optional: true })
            ]),
            transition(':leave', [
                animate('0.25s ease-out', style({ opacity: '0' }))
            ])
        ])
    ]
})
export class AttackModifierSimulatorComponent implements OnInit {
    private routeParam: string;
    private footerHeight = 190;
    private endRoundTimeout = null;
    public roundCounter = 1;
    public windowHeight: number;
    public windowWidth: number;
    public attacksHeight: number;
    public character: Character = new Character();
    public deck: AttackModifierDeck;
    public attack: Attack;
    public attacks: Attacks;
    public cardHistoryVisible = false;
    public numpadEnabled = false;
    public historyTabActive = true;
    public cardChances = [];
    public showAnalytics = false;
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
            console.log(`Loading existing session if possible...`);
            if (this.character.attackModifierDeck.currentSession &&
                confirm("Would you like to load the previous session?")) {
                this.deck.mapCards(this.character.attackModifierDeck.currentSession.cards);
                this.deck.mapDiscards(this.character.attackModifierDeck.currentSession.discard);
                this.roundCounter = this.character.attackModifierDeck.currentSession.round;
            } else {
                this.character.attackModifierDeck.currentSession = {
                    cards: this.character.attackModifierDeck.cards,
                    discard: [],
                    round: 1
                };
                this.deck.mapCards(this.character.attackModifierDeck.cards);
            }

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

    public getCardWidth() {
        if (this.windowWidth > 600) {
            return 300;
        } else {
            return this.windowWidth * 0.5;
        }
    }

    public baseDamageOnChange() {
        this.attacks.currentAttack.base = this.baseDamage.value;
    }

    public proceedToNextRound() {
        this.roundCounter++;
        if (this.deck.requiresShuffle) {
            this.deck.reshuffle();
        }
        this.attack = null;
        this.attacks.reset(this.baseDamage.value);
        this.deck.disadvantaged = false;
        this.deck.advantaged = false;
        this.deck.animationQueue = [];
    }

    public createNewAttack() {
        this.numpadEnabled = false;
        this.attack = null;
        this.deck.animationQueue = [];
        if (this.endRoundTimeout) clearTimeout(this.endRoundTimeout);

        setTimeout(() => {
            // Perform attack
            this.attack = new Attack(this.baseDamage.value);
            this.attacks.createAttack(this.attack);
            this.deck.attack(this.attacks.currentAttack);
            this.baseDamage.setValue(0);
            this.adjustHeights();

            // Store in local storage
            this.character.attackModifierDeck.currentSession.cards = this.deck.cards;
            this.character.attackModifierDeck.currentSession.discard = this.deck.discard;
            this.character.attackModifierDeck.currentSession.round = this.roundCounter;
            localStorage.setItem(`char:${this.character.name}`, JSON.stringify(this.character));
        }, 200);

        // Prompt user to proceed to next round after 45 seconds
        this.endRoundTimeout = setTimeout(() => {
            if (confirm("Would you like to proceed to the next round?")) {
                this.proceedToNextRound();
            }
        }, 45000);
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

    public clickNum(num: number) {
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
        this.windowWidth = window.innerWidth;
        this.attacksHeight = window.innerHeight - this.footerHeight;
    }

    public curse() {
        const curseCard = Curse.clone();
        this.deck.cards.push(curseCard);
        this.deck.shuffle();
    }

    public bless() {
        const blessCard = Bless.clone();
        this.deck.cards.push(blessCard);
        this.deck.shuffle();
    }

    public calculateChances() {
        const results = this.deck.calculateChances();
        this.cardChances = [];

        for (let property in results) {
            if (results.hasOwnProperty(property)) {
                const card = Cards.retrieveCard(property);
                const chance = (results[property] * 100).toFixed(2);
                this.cardChances.push({ card: card, chance: chance });
                this.cardChances.sort((a, b) => {
                    return b.chance - a.chance;
                })
            }
        }

    }
}
