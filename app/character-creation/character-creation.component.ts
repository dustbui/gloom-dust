import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from '../_global/models/character';
import { Router } from '@angular/router';
import { CharacterClass } from '../_global/models/CharacterClass';
import { CharacterClasses } from '../_global/data/classes';

@Component({
    selector: 'app-character-creation',
    templateUrl: './character-creation.component.html',
    styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {
    name = new FormControl('');
    class = new FormControl('');
    public windowHeight: number;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.adjustHeights();
    }

    constructor(private router: Router) { }

    ngOnInit() {
        this.adjustHeights();
    }

    public createCharacter() {
        const newCharacter = new Character();
        newCharacter.name = this.name.value;
        const characterClass = CharacterClasses[this.class.value.toLowerCase()] || new CharacterClass();
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
    }
}
