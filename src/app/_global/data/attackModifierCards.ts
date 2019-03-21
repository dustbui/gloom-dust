import { AttackModifierCard } from '../models/attackModifierCard';
import { Attack } from '../models/attack';

export const Plus1 = new AttackModifierCard();
Plus1.name = '+1';
Plus1.adder = 1;

export const Plus2 = new AttackModifierCard();
Plus2.name = '+2';
Plus2.adder = 2;

export const Plus3 = new AttackModifierCard();
Plus3.name = '+3';
Plus3.adder = 3;

export const Zero = new AttackModifierCard();
Zero.name = '0';
Zero.adder = 0;

export const Minus1 = new AttackModifierCard();
Minus1.name = '-1';
Minus1.adder = -1;

export const Minus2 = new AttackModifierCard();
Minus2.name = '-2';
Minus2.adder = -2;

export const Null = new AttackModifierCard();
Null.name = 'NULL';
Null.shuffler = true;
Null.multiplier = 0;

export const x2 = new AttackModifierCard();
x2.name = 'x2';
x2.multiplier = 2;
x2.shuffler = true;

export const rollingNature = new AttackModifierCard();
rollingNature.name = 'rollingNature';
rollingNature.chained = true;
rollingNature.nature = true;

export const rollingFire = new AttackModifierCard();
rollingFire.name = 'rollingFire';
rollingFire.chained = true;
rollingFire.fire = true;

export const rollingIce = new AttackModifierCard();
rollingIce.name = 'rollingIce';
rollingIce.chained = true;
rollingIce.ice = true;

export const rollingWind = new AttackModifierCard();
rollingWind.name = 'rollingWind';
rollingWind.chained = true;
rollingWind.wind = true;

export const rollingLight = new AttackModifierCard();
rollingLight.name = 'rollingLight';
rollingLight.chained = true;
rollingLight.light = true;

export const rollingDarkness = new AttackModifierCard();
rollingDarkness.name = 'rollingDarkness';
rollingDarkness.chained = true;
rollingDarkness.darkness = true;

export const rollingMuddle = new AttackModifierCard();
rollingMuddle.name = 'rollingMuddle';
rollingMuddle.chained = true;
rollingMuddle.muddle = true;

export const rollingInvisible = new AttackModifierCard();
rollingInvisible.name = 'rollingInvisible';
rollingInvisible.chained = true;
rollingInvisible.invisible = true;

export const rollingDisarm = new AttackModifierCard();
rollingDisarm.name = 'rollingDisarm';
rollingDisarm.chained = true;
rollingDisarm.disarm = true;

export const rollingStun = new AttackModifierCard();
rollingStun.name = 'rollingStun';
rollingStun.chained = true;
rollingStun.stun = true;

export const rollingPoison = new AttackModifierCard();
rollingPoison.name = 'rollingPoison';
rollingPoison.chained = true;
rollingPoison.poison = true;

export const rollingWound = new AttackModifierCard();
rollingWound.name = 'rollingWound';
rollingWound.chained = true;
rollingWound.wound = true;

export const rollingStrengthen = new AttackModifierCard();
rollingStrengthen.name = 'rollingStrengthen';
rollingStrengthen.chained = true;
rollingStrengthen.strengthen = true;

export const rollingImmobilize = new AttackModifierCard();
rollingImmobilize.name = 'rollingImmobilize';
rollingImmobilize.chained = true;
rollingImmobilize.immobilize = true;

export const rollingPierce3 = new AttackModifierCard();
rollingPierce3.name = 'rollingPierce3';
rollingImmobilize.chained = true;
rollingPierce3.pierce = 3;

export const push1Plus1 = new AttackModifierCard();
push1Plus1.name = 'push1Plus1';
push1Plus1.push = 1;
push1Plus1.adder = 1;

export const pull1Plus1 = new AttackModifierCard();
pull1Plus1.name = 'pull1Plus1';
pull1Plus1.pull = 1;
pull1Plus1.adder = 1;

export const plus2Fire = new AttackModifierCard();
plus2Fire.name = 'plus2Fire';
plus2Fire.adder = 2;
plus2Fire.fire = true;

export const plus2Muddle = new AttackModifierCard();
plus2Muddle.name = 'plus2Muddle';
plus2Muddle.adder = 2;
plus2Muddle.muddle = true;


export const allCards = [
    Plus1, Plus2, Plus3, Zero, Minus1, Minus2, x2, Null,
    rollingFire, rollingIce, rollingNature, rollingWind,
    rollingLight, rollingDarkness, rollingDisarm, rollingImmobilize,
    rollingInvisible, rollingStun, rollingMuddle, rollingPoison,
    rollingPierce3, rollingStrengthen, push1Plus1, pull1Plus1,
    plus2Fire, plus2Muddle
];
