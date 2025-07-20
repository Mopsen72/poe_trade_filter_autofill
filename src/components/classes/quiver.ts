import {CBaseItem} from "./base";
import {IAdditionalPattern} from "../parser/types.ts";
import {BOW_DAMAGE, PROJECTILE_LEVEL, PROJECTILE_SPEED,} from "./consts/patterns.ts";
import {ALL_CHARACTERS, DEXTERITY, INTELLIGENT, STRENGTH} from "./consts/characterPatterns.ts";
import {
    ATTACK_SPEED,
    CRITICAL_CHANCE_ATTACK,
    CRITICAL_DAMAGE_ATTACK,
    FLAT_FIRE_DAMAGE,
    FLAT_ICE_DAMAGE,
    FLAT_LIGHTNING_DAMAGE,
    FLAT_PHYSICAL_DAMAGE
} from "./consts/attackPatterns.ts";


const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    CRITICAL_CHANCE_ATTACK,
    CRITICAL_DAMAGE_ATTACK,
    ATTACK_SPEED,
    PROJECTILE_SPEED,
    BOW_DAMAGE,
    FLAT_PHYSICAL_DAMAGE,
    FLAT_FIRE_DAMAGE,
    FLAT_ICE_DAMAGE,
    FLAT_LIGHTNING_DAMAGE,
    PROJECTILE_LEVEL,

};

export class CQuiver extends CBaseItem {

    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);
    }

}