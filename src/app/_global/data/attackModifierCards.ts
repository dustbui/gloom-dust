import { AttackModifierCard } from '../models/attackModifierCard';
import { Attack } from '../models/attack';

export const Bless = new AttackModifierCard();
Bless.name = 'bless';
Bless.multiplier = 2;
Bless.consumed = true;
Bless.centerImageUrl = 'url(assets/images/cards/bless.png)';

export const Curse = new AttackModifierCard();
Curse.name = 'curse';
Curse.multiplier = 0;
Curse.consumed = true;
Curse.centerImageUrl = 'url(assets/images/cards/curse.png)';

export const Plus1 = new AttackModifierCard();
Plus1.name = '+1';
Plus1.adder = 1;
Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const Plus2 = new AttackModifierCard();
Plus2.name = '+2';
Plus2.adder = 2;
Plus2.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const Zero = new AttackModifierCard();
Zero.name = '0';
Zero.adder = 0;
Zero.centerImageUrl = 'url(assets/images/cards/zero.png)';

export const Minus1 = new AttackModifierCard();
Minus1.name = '-1';
Minus1.adder = -1;
Minus1.centerImageUrl = 'url(assets/images/cards/minus1.png)';

export const Minus2 = new AttackModifierCard();
Minus2.name = '-2';
Minus2.adder = -2;
Minus2.centerImageUrl = 'url(assets/images/cards/minus2.png)';

export const Null = new AttackModifierCard();
Null.name = 'NULL';
Null.shuffler = true;
Null.multiplier = 0;
Null.centerImageUrl = 'url(assets/images/cards/null.png)';

export const x2 = new AttackModifierCard();
x2.name = 'x2';
x2.multiplier = 2;
x2.shuffler = true;
x2.centerImageUrl = 'url(assets/images/cards/crit.png)';

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
rollingLight.centerImageUrl = 'url(assets/images/cards/zero.png)';

export const rollingDarkness = new AttackModifierCard();
rollingDarkness.name = 'rollingDarkness';
rollingDarkness.chained = true;
rollingDarkness.darkness = true;
rollingDarkness.centerImageUrl = 'url(assets/images/cards/zero.png)';

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
rollingPierce3.chained = true;
rollingPierce3.pierce = 3;

export const push1Plus1 = new AttackModifierCard();
push1Plus1.name = 'push1Plus1';
push1Plus1.push = 1;
push1Plus1.adder = 1;
push1Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const pull1Plus1 = new AttackModifierCard();
pull1Plus1.name = 'pull1Plus1';
pull1Plus1.pull = 1;
pull1Plus1.adder = 1;
pull1Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const plus2Fire = new AttackModifierCard();
plus2Fire.name = 'plus2Fire';
plus2Fire.adder = 2;
plus2Fire.fire = true;
plus2Fire.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const plus2Ice = new AttackModifierCard();
plus2Ice.name = 'plus2Ice';
plus2Ice.adder = 2;
plus2Ice.ice = true;
plus2Ice.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const plus2Muddle = new AttackModifierCard();
plus2Muddle.name = 'plus2Muddle';
plus2Muddle.adder = 2;
plus2Muddle.muddle = true;
plus2Muddle.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const rollingPlus1 = new AttackModifierCard();
rollingPlus1.name = 'rollingPlus1';
rollingPlus1.adder = 1;
rollingPlus1.chained = true;
rollingPlus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const allCards = [
    Bless, Curse, Plus1, Plus2, Zero, Minus1, Minus2, x2, Null,
    rollingFire, rollingIce, rollingNature, rollingWind,
    rollingLight, rollingDarkness, rollingDisarm, rollingImmobilize,
    rollingInvisible, rollingStun, rollingMuddle, rollingPoison,
    rollingPierce3, rollingStrengthen, push1Plus1, pull1Plus1,
    plus2Fire, plus2Ice, plus2Muddle, rollingPlus1
];

