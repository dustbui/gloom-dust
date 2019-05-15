import { Attack } from './attack';

export class AttackModifierCard {
    id: string;
    name: string;
    defaultAmount: number;
    centerImageUrl: string;
    adder: number;
    multiplier: number;
    chained: boolean;
    shuffler: boolean;
    consumed: boolean;

    // Effects
    poison: boolean;
    wound: boolean;
    stun: boolean;
    disarm: boolean;
    strengthen: boolean;
    muddle: boolean;
    invisible: boolean;
    immobilize: boolean;

    pierce: number;
    push: number;
    pull: number;
    heal: number;
    healSelf: number;
    shield: number;
    retaliate: number;
    curse: number;
    bless: number;
    targets: number;

    // Elements
    fire: boolean;
    ice: boolean;
    wind: boolean;
    nature: boolean;
    light: boolean;
    darkness: boolean;

    constructor() {
        this.shuffler = false;
        this.chained = false;
        this.consumed = false;
        this.multiplier = 1;
        this.adder = 0;
        this.pierce = 0;
        this.push = 0;
        this.pull = 0;
        this.targets = 0;
        this.shield = 0;
        this.heal = 0;
        this.healSelf = 0;
        this.centerImageUrl = 'url(assets/images/cards/zero.png)';
        this.defaultAmount = 0;
    }

    public modifyAttack(attack: Attack) {
        // attack.value += this.adder;
        attack.adders += this.adder;
        attack.multipliers *= this.multiplier;

        attack.pierce += this.pierce;
        attack.push += this.push;
        attack.pull += this.pull;
        attack.shield += this.shield;
        attack.targets += this.targets;
        attack.heal += this.heal;
        attack.healSelf += this.healSelf;
        // don't think you can roll multipliers, so this should be the last effect applied each time
        // attack.value *= this.multiplier;

        // Status Effects and Elements
        attack.fire = attack.fire || this.fire;
        attack.ice = attack.ice || this.ice;
        attack.wind = attack.wind || this.wind;
        attack.nature = attack.nature || this.nature;
        attack.light = attack.light || this.light;
        attack.darkness = attack.darkness || this.darkness;
        attack.poison = attack.poison || this.poison;
        attack.wound = attack.wound || this.wound;
        attack.strengthen = attack.strengthen || this.strengthen;
        attack.muddle = attack.muddle || this.muddle;
        attack.stun = attack.stun || this.stun;
        attack.disarm = attack.disarm || this.disarm;
        attack.invisible = attack.invisible || this.invisible;
        attack.immobilize = attack.immobilize || this.immobilize;
    }

    public clone() {
        const newCard = new AttackModifierCard();
        newCard.id = this.name;
        newCard.name = this.name;
        newCard.centerImageUrl = this.centerImageUrl;

        newCard.adder = this.adder;
        newCard.multiplier = this.multiplier;
        newCard.chained = this.chained;
        newCard.shuffler = this.shuffler;
        newCard.multiplier = this.multiplier;
        newCard.consumed = this.consumed;

        // Effects
        newCard.pierce = this.pierce;
        newCard.push = this.push;
        newCard.pull = this.pull;
        newCard.heal = this.heal;
        newCard.healSelf = this.healSelf;
        newCard.curse = this.curse;
        newCard.bless = this.bless;

        newCard.poison = this.poison;
        newCard.wound = this.wound;
        newCard.stun = this.stun;
        newCard.disarm = this.disarm;
        newCard.strengthen = this.strengthen;
        newCard.muddle = this.muddle;
        newCard.invisible = this.invisible;
        newCard.immobilize = this.immobilize;
        newCard.shield = this.shield;
        newCard.targets = this.targets;

        // Elements
        newCard.fire = this.fire;
        newCard.ice = this.ice;
        newCard.wind = this.wind;
        newCard.nature = this.nature;
        newCard.light = this.light;
        newCard.darkness = this.darkness;

        // console.log(`Cloned ${JSON.stringify(newCard)}`);
        return newCard;
    }

    public animate() {

    }
}
