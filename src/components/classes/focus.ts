import {CBaseItem} from "./base.ts";
import {IAdditionalPattern} from "../parser/types.ts";
import {ADDED_FIRE_DAMAGE, ADDED_ICE_DAMAGE, ADDED_LIGHTNING_DAMAGE,} from "./consts/patterns.ts";
import {
    CHAOS_SPELL_DAMAGE,
    CHAOS_SPELL_LEVEL,
    CRITICAL_CHANCE_SPELL,
    CRITICAL_DAMAGE_SPELL,
    FIRE_SPELL_DAMAGE,
    FIRE_SPELL_LEVEL,
    ICE_SPELL_DAMAGE,
    ICE_SPELL_LEVEL,
    LIGHTNING_SPELL_DAMAGE,
    LIGHTNING_SPELL_LEVEL,
    PHYSICAL_SPELL_DAMAGE,
    PHYSICAL_SPELL_LEVEL,
    SPELL_CAST_SPEED,
    SPELL_DAMAGE,
    SPELL_LEVEL,
} from "./consts/spellPatterns.ts"
import {ALL_CHARACTERS, DEXTERITY, INTELLIGENT, MANA, MANA_REGEN, STRENGTH} from "./consts/characterPatterns.ts";
import {CHAOS_RESIST, ELEMENTAL_RESIST, FIRE_RESIST, ICE_RESIST, LIGHTNING_RESIST} from "./consts/resistPatterns.ts";


const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    MANA,
    MANA_REGEN,
    PHYSICAL_SPELL_DAMAGE,
    FIRE_SPELL_DAMAGE,
    ICE_SPELL_DAMAGE,
    LIGHTNING_SPELL_DAMAGE,
    CHAOS_SPELL_DAMAGE,
    SPELL_DAMAGE,
    CRITICAL_CHANCE_SPELL,
    CRITICAL_DAMAGE_SPELL,
    ADDED_FIRE_DAMAGE,
    ADDED_ICE_DAMAGE,
    ADDED_LIGHTNING_DAMAGE,
    PHYSICAL_SPELL_LEVEL,
    FIRE_SPELL_LEVEL,
    ICE_SPELL_LEVEL,
    LIGHTNING_SPELL_LEVEL,
    CHAOS_SPELL_LEVEL,
    SPELL_LEVEL,
    SPELL_CAST_SPEED,
    ELEMENTAL_RESIST,
    FIRE_RESIST,
    ICE_RESIST,
    LIGHTNING_RESIST,
    CHAOS_RESIST,
}

export class CFocus extends CBaseItem {

    energyShield: number | null

    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);

        const splitItem = stringItem.split("--------")
        const characters = splitItem[1].split("\n")

        const qualityString = characters.find((string) => string.includes("Качество:"))
        let quality = qualityString ? +qualityString.match(/[+-]?\d+(\.\d+)?/g)![0] : 0

        const energyShieldItem = characters.find((string) => string.includes("Энергетический щит:"))
        if (energyShieldItem) {
            const value = +energyShieldItem.match(/\d+/g)![0]
            this.energyShield = this.calculateValue(value, quality)
        }

    }

}