import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from '../_global/models/character';
import { Router } from '@angular/router';
import { CharacterClass } from '../_global/models/CharacterClass';
import { CharacterClasses } from '../_global/data/characterClasses';
import { Constants } from '../_global/constants';

@Component({
    selector: 'app-character-creation',
    templateUrl: './character-creation.component.html',
    styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {
    name = new FormControl('');
    public class: string;
    public allClasses = [];
    public windowHeight: number;
    public windowWidth: number;
    public containerHeight: number;
    public selectedId: number;
    public placeholderText = 'Character Name...'

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.adjustHeights();
    }

    constructor(private router: Router) { }

    ngOnInit() {
        this.adjustHeights();

        this.allClasses = Array.from(CharacterClasses.values());
    }

    public setSelected(c, index) {
        this.class = c.name
        this.selectedId = index;
    }

    public isPortraitSelected(index) {
        return index === this.selectedId;
    }

    public isWarningVisable() {
        return this.placeholderText === 'Must have a character name!';
    }

    public createCharacter() {
        if (this.name.value === '') {
            this.placeholderText = 'Must have a character name!'
            return;
        }
        const newCharacter = new Character();
        newCharacter.name = this.name.value;
        const characterClass = CharacterClasses.get(this.class);
        newCharacter.class = characterClass;
        const jsonCharacterString = JSON.stringify(newCharacter);
        localStorage.setItem(`char:${this.name.value}`, jsonCharacterString);

        // Also add to list of character keys
        const characterStorage = localStorage.getItem('characters');
        let characterKeys = [];
        if (characterStorage) {
            characterKeys = localStorage.getItem('characters').split(',');
        }

        characterKeys.push(newCharacter.name);
        localStorage.setItem('characters', characterKeys.join(','));

        console.log(`Storing new character: "${newCharacter.name}"`);
        this.router.navigate(['']);
    }

    private adjustHeights() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.containerHeight = this.windowHeight - Constants.TOP_BAR_HEIGHT;
    }
}
