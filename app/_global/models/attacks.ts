import { Attack } from './attack';

export class Attacks {
    private attacks: Attack[];

    constructor() {
        this.attacks = [new Attack(0)];
    }

    public get currentAttack(): Attack {
        if (!this.attacks.length) { return new Attack(0); }
        return this.attacks[this.attacks.length - 1];
    }

    public getAll(): Attack[] {
        return this.attacks;
    }

    public get length(): number {
        return this.attacks.length;
    }

    public createAttack(attack: Attack) {
        this.attacks.push(attack);
    }

    public reset(baseDamage: number) {
        this.attacks = [];
    }
}
