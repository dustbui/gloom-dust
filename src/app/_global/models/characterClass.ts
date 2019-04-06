import { AttackModifierCard } from './attackModifierCard';

export class CharacterClass {
    name: string;
    handSize: number;
    thumbnailUrl: string;
    fullImageUrl: string;
    perks: AttackModifierCard[] | any;
}