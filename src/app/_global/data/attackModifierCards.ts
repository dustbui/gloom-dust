import { AttackModifierCard } from '../models/attackModifierCard';

export const Bless = new AttackModifierCard();
Bless.name = 'Bless';
Bless.multiplier = 2;
Bless.consumed = true;
Bless.centerImageUrl = 'url(assets/images/cards/bless.png)';

export const Curse = new AttackModifierCard();
Curse.name = 'Curse';
Curse.multiplier = 0;
Curse.consumed = true;
Curse.centerImageUrl = 'url(assets/images/cards/curse.png)';

export const Plus1 = new AttackModifierCard();
Plus1.name = '+1';
Plus1.adder = 1;
Plus1.defaultAmount = 5;
Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const Plus2 = new AttackModifierCard();
Plus2.name = '+2';
Plus2.adder = 2;
Plus2.defaultAmount = 1;
Plus2.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const Plus3 = new AttackModifierCard();
Plus3.name = '+3';
Plus3.adder = 3;
// Plus3.centerImageUrl = 'url(assets/images/cards/plus3.png)' add later

export const Zero = new AttackModifierCard();
Zero.name = '0';
Zero.adder = 0;
Zero.defaultAmount = 6;
Zero.centerImageUrl = 'url(assets/images/cards/zero.png)';

export const Minus1 = new AttackModifierCard();
Minus1.name = '-1';
Minus1.adder = -1;
Minus1.defaultAmount = 5;
Minus1.centerImageUrl = 'url(assets/images/cards/minus1.png)';

export const Minus2 = new AttackModifierCard();
Minus2.name = '-2';
Minus2.adder = -2;
Minus2.defaultAmount = 1;
Minus2.centerImageUrl = 'url(assets/images/cards/minus2.png)';

export const Null = new AttackModifierCard();
Null.name = 'NULL';
Null.shuffler = true;
Null.multiplier = 0;
Null.defaultAmount = 1;
Null.centerImageUrl = 'url(assets/images/cards/null.png)';

export const x2 = new AttackModifierCard();
x2.name = 'x2';
x2.multiplier = 2;
x2.shuffler = true;
x2.defaultAmount = 1;
x2.centerImageUrl = 'url(assets/images/cards/crit.png)';

export const rollingNature = new AttackModifierCard();
rollingNature.name = 'Rolling Nature';
rollingNature.chained = true;
rollingNature.nature = true;

export const rollingFire = new AttackModifierCard();
rollingFire.name = 'Rolling Fire';
rollingFire.chained = true;
rollingFire.fire = true;

export const rollingIce = new AttackModifierCard();
rollingIce.name = 'Rolling Ice';
rollingIce.chained = true;
rollingIce.ice = true;

export const rollingWind = new AttackModifierCard();
rollingWind.name = 'Rolling Wind';
rollingWind.chained = true;
rollingWind.wind = true;

export const rollingLight = new AttackModifierCard();
rollingLight.name = 'Rolling Light';
rollingLight.chained = true;
rollingLight.light = true;

export const rollingDarkness = new AttackModifierCard();
rollingDarkness.name = 'Rolling Darkness';
rollingDarkness.chained = true;
rollingDarkness.darkness = true;

export const rollingMuddle = new AttackModifierCard();
rollingMuddle.name = 'Rolling Muddle';
rollingMuddle.chained = true;
rollingMuddle.muddle = true;

export const rollingInvisible = new AttackModifierCard();
rollingInvisible.name = 'Rolling Invisible';
rollingInvisible.chained = true;
rollingInvisible.invisible = true;

export const rollingDisarm = new AttackModifierCard();
rollingDisarm.name = 'Rolling Disarm';
rollingDisarm.chained = true;
rollingDisarm.disarm = true;

export const rollingStun = new AttackModifierCard();
rollingStun.name = 'Rolling Stun';
rollingStun.chained = true;
rollingStun.stun = true;

export const rollingPoison = new AttackModifierCard();
rollingPoison.name = 'Rolling Poison';
rollingPoison.chained = true;
rollingPoison.poison = true;

export const rollingWound = new AttackModifierCard();
rollingWound.name = 'Rolling Wound';
rollingWound.chained = true;
rollingWound.wound = true;

export const rollingStrengthen = new AttackModifierCard();
rollingStrengthen.name = 'Rolling Strengthen';
rollingStrengthen.chained = true;
rollingStrengthen.strengthen = true;

export const rollingImmobilize = new AttackModifierCard();
rollingImmobilize.name = 'Rolling Immobilize';
rollingImmobilize.chained = true;
rollingImmobilize.immobilize = true;

export const rollingPierce3 = new AttackModifierCard();
rollingPierce3.name = 'Rolling Pierce 3';
rollingPierce3.chained = true;
rollingPierce3.pierce = 3;

export const rollingAddTarget = new AttackModifierCard();
rollingAddTarget.name = 'Rolling Add Target';
rollingAddTarget.chained = true;
rollingAddTarget.targets = 1;

export const rollingPull1 = new AttackModifierCard();
rollingPull1.name = 'Rolling Pull One';
rollingPull1.chained = true;
rollingPull1.pull = 1;

export const rollingPush2 = new AttackModifierCard();
rollingPush2.name = 'Rolling Push Two';
rollingPush2.push = 2;
rollingPush2.chained = true;

export const rollingPush1 = new AttackModifierCard();
rollingPush1.name = 'Rolling Push One';
rollingPush1.push = 1;
rollingPush1.chained = true;

export const rollingHealSelf1 = new AttackModifierCard();
rollingHealSelf1.name = 'Rolling Heal Self One'
rollingHealSelf1.healSelf = 1;
rollingHealSelf1.chained = true;

export const rollingShield1 = new AttackModifierCard();
rollingShield1.name = 'Rolling Sheild Self One';
rollingShield1.shield = 1;
rollingShield1.chained = true;

export const addTargetPlus0 = new AttackModifierCard();
addTargetPlus0.name = 'Add Target';
addTargetPlus0.targets = 1;

export const stunPlus0 = new AttackModifierCard();
stunPlus0.name = 'Stun';
stunPlus0.stun = true;

export const push1Plus1 = new AttackModifierCard();
push1Plus1.name = 'Push One +1';
push1Plus1.push = 1;
push1Plus1.adder = 1;
push1Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const pull1Plus1 = new AttackModifierCard();
pull1Plus1.name = 'Pull One +1';
pull1Plus1.pull = 1;
pull1Plus1.adder = 1;
pull1Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const woundPlus1 = new AttackModifierCard();
woundPlus1.name = 'Wound +1';
woundPlus1.wound = true;
woundPlus1.adder = 1;
woundPlus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const cursePlus1 = new AttackModifierCard();
cursePlus1.name = 'Curse +1';
cursePlus1.curse = 1;
cursePlus1.adder = 1;
cursePlus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const immobilizePlus1 = new AttackModifierCard();
immobilizePlus1.name = 'Immobilize +1';
immobilizePlus1.immobilize = true;
immobilizePlus1.adder = 1;
immobilizePlus1.centerImageUrl = 'url(assets/images/cards/plus1.png)'

export const shield1Plus1 = new AttackModifierCard();
shield1Plus1.name = 'Shield One +1';
shield1Plus1.shield = 1;
shield1Plus1.adder = 1;
shield1Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const healSelf2Plus1 = new AttackModifierCard();
healSelf2Plus1.name = 'Heal Self Two +1'
healSelf2Plus1.healSelf = 2;
healSelf2Plus1.adder = 1;
healSelf2Plus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';

export const plus2Fire = new AttackModifierCard();
plus2Fire.name = 'Fire +2';
plus2Fire.adder = 2;
plus2Fire.fire = true;
plus2Fire.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const plus2Ice = new AttackModifierCard();
plus2Ice.name = 'Ice +2';
plus2Ice.adder = 2;
plus2Ice.ice = true;
plus2Ice.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const plus2Muddle = new AttackModifierCard();
plus2Muddle.name = 'Muddle +2';
plus2Muddle.adder = 2;
plus2Muddle.muddle = true;
plus2Muddle.centerImageUrl = 'url(assets/images/cards/plus2.png)';

export const rollingPlus1 = new AttackModifierCard();
rollingPlus1.name = 'Rolling +1';
rollingPlus1.adder = 1;
rollingPlus1.chained = true;
rollingPlus1.centerImageUrl = 'url(assets/images/cards/plus1.png)';


export const defaultCards = [
    Plus1, Plus2, Zero, Minus1, 
    Minus2, x2, Null,
]

export const scenarioCards = [Curse, Bless]

export const perkCards = [
    rollingFire, rollingIce, rollingNature, rollingWind,
    rollingLight, rollingDarkness, rollingDisarm, rollingImmobilize,
    rollingInvisible, rollingStun, rollingMuddle, rollingPoison,
    rollingPierce3, rollingStrengthen, rollingAddTarget, rollingPush1, 
    rollingPush2, rollingPull1, rollingShield1, addTargetPlus0, stunPlus0,
    push1Plus1, pull1Plus1, immobilizePlus1, cursePlus1, woundPlus1, 
    rollingHealSelf1, healSelf2Plus1, shield1Plus1, plus2Fire, plus2Ice, 
    plus2Muddle, rollingPlus1, Plus3
]
export const allCards = [
    ...defaultCards,
    ...perkCards,
    ...scenarioCards
];

export function retrieveCard(name: string) {
    return allCards.find((c) => {
        return name == c.name;
    }).clone();
}
