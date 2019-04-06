import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../_global/models/character';
import { AttackModifierDeck } from '../_global/models/attackModifierDeck';
import { AttackModifierCard } from '../_global/models/attackModifierCard';
import { allCards, perkCards, defaultCards, scenarioCards } from '../_global/data/attackModifierCards';
import { Constants } from '../_global/constants';

@Component({
    selector: 'app-deck-editor',
    templateUrl: './deck-editor.component.html',
    styleUrls: ['./deck-editor.component.scss']
})
export class DeckEditorComponent implements OnInit {
    public character: Character = new Character();
    public deck: AttackModifierDeck;
    public windowHeight: number;
    public containerHeight: number;
    public allCards: AttackModifierCard[];
    public classCards: AttackModifierCard[];
    public cardsToShow: {
        cards: AttackModifierCard[];
        nameToSwitchTo: string;
    }

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
            this.deck.cards = this.character.attackModifierDeck.cards;
            this.deck.shuffle();
            this.adjustHeights();
            this.allCards = allCards;
            this.classCards = this.character.class.perks ? [ ...defaultCards, ...this.character.class.perks, ...scenarioCards] : this.allCards
            this.cardsToShow = {
                cards: this.classCards,
                nameToSwitchTo: 'All'
            }
        });
    }

    public removeCard(cardName: string) {
        const removedCardIndex = this.deck.cards.findIndex(card => {
            return card.name === cardName;
        });
        if (removedCardIndex < 0) { return; }
        console.log('Removed: ', removedCardIndex);
        this.deck.cards.splice(removedCardIndex, 1);
        this.commitDeck();
    }

    public addCard(cardName: string) {
        const newCard = this.allCards.find(card => {
            return card.name === cardName;
        });
        console.log('Added: ', newCard);
        this.deck.cards.push(newCard.clone());
        this.commitDeck();
    }

    public setDefaults() {
        this.deck = new AttackModifierDeck();
        this.commitDeck();
    }

    public setDeck() {
        if(this.cardsToShow.cards.length === this.classCards.length) {
            this.cardsToShow = {
                cards: this.allCards,
                nameToSwitchTo: 'Class'
            } 
        } else {
            this.cardsToShow = {
                cards: this.classCards,
                nameToSwitchTo: 'All'
            }
        }
    }

    private adjustHeights() {
        this.windowHeight = window.innerHeight;
        this.containerHeight = this.windowHeight - Constants.TOP_BAR_HEIGHT;
    }

    private commitDeck() {
        this.character.attackModifierDeck.cards = this.deck.cards;
        console.log(`Saving character: `, this.character);
        localStorage.setItem(`char:${this.character.name}`, JSON.stringify(this.character));
    }
}
