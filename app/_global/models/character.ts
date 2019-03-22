import { CharacterClass } from './CharacterClass';
import { AttackModifierDeck } from './attackModifierDeck';

export class Character {
    constructor() {
        this.level = 1;
        this.xp = 0;
        this.gold = 30;
        this.attackModifierDeck = new AttackModifierDeck();
    }

    name: string;
    level: number;
    gold: number;
    xp: number;
    class: CharacterClass;

    // Status Effects
    advantaged: boolean;
    disadvantaged: boolean;
    muddled: boolean;
    strengthened: boolean;
    posioned: boolean;
    wounded: boolean;

    attackModifierDeck: AttackModifierDeck;

    get health(): number {
        return this.level * 2 + 10;
    }

    get xpThreshold(): number {
        return this.level * 45;
    }
}
