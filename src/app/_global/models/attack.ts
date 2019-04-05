export class Attack {
    constructor(baseDamage: number) {
        this.base = baseDamage || 0;
        this.adders = 0;
        this.multipliers = 1;
        this.pierce = 0;
        this.push = 0;
        this.pull = 0;
        this.curse = 0;
        this.bless = 0;
        // console.log(`New attack created: ${JSON.stringify(this)}`);
    }
    committed: boolean;
    advantaged: boolean;
    disadvantaged: boolean;

    wound: boolean;
    poison: boolean;
    muddle: boolean;
    stun: boolean;
    disarm: boolean;
    strengthen: boolean;
    invisible: boolean;
    immobilize: boolean;

    base: number;
    adders: number;
    multipliers: number;
    pierce: number;
    heal: number;
    shield: number;
    retaliate: number;
    pull: number;
    push: number;
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

    get value(): number {
        return (this.base + this.adders) * this.multipliers;
    }

    public clone() {
        const newAttack = new Attack(this.base);
        newAttack.base = this.base;
        newAttack.adders = this.adders;
        newAttack.multipliers = this.multipliers;
        // newAttack.value = this.value;
        newAttack.pierce = this.pierce;
        newAttack.heal = this.heal;
        newAttack.pull = this.pull;
        newAttack.push = this.push;
        newAttack.curse = this.curse;
        newAttack.bless = this.bless;

        newAttack.wound = this.wound;
        newAttack.poison = this.poison;
        newAttack.muddle = this.muddle;
        newAttack.strengthen = this.strengthen;
        newAttack.disarm = this.disarm;
        newAttack.invisible = this.invisible;
        newAttack.immobilize = this.immobilize;
        newAttack.stun = this.stun;

        newAttack.fire = this.fire;
        newAttack.ice = this.ice;
        newAttack.wind = this.wind;
        newAttack.nature = this.nature;
        newAttack.light = this.light;
        newAttack.darkness = this.darkness;
        return newAttack;
    }

    public map(attack: Attack) {
        Object.assign(this, attack);
    }
}
