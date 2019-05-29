import { AttackModifierCard } from './attackModifierCard';

export class CharacterClass {
    constructor() {
        this.perks = [];
    }
    name: string;
    handSize: number;
    thumbnailUrl: string;
    fullImageUrl: string;
    perks: AttackModifierCard[] | any;
}