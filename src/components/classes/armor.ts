import {CBaseItem} from "./base.ts";
import {IAdditionalPattern} from "../parser/types.ts";
import {MELEE_LEVEL, MOVE_SPEED, RARITY, SPIRIT} from "./consts/patterns.ts";
import {
    ALL_CHARACTERS,
    DEXTERITY,
    INTELLIGENT,
    LIFE,
    LIFE_REGENERATION,
    MANA,
    MANA_REGEN,
    STRENGTH
} from "./consts/characterPatterns.ts";
import {CHAOS_RESIST, ELEMENTAL_RESIST, FIRE_RESIST, ICE_RESIST, LIGHTNING_RESIST} from "./consts/resistPatterns.ts";
import {MINION_LEVEL} from "./consts/minionPatterns.ts";
import {
    ATTACK_SPEED,
    FLAT_FIRE_DAMAGE,
    FLAT_ICE_DAMAGE,
    FLAT_LIGHTNING_DAMAGE,
    FLAT_PHYSICAL_DAMAGE
} from "./consts/attackPatterns.ts";
import {SPELL_CAST_SPEED} from "./consts/spellPatterns.ts";

const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    LIFE,
    LIFE_REGENERATION,
    MANA,
    MANA_REGEN,
    ELEMENTAL_RESIST,
    FIRE_RESIST,
    ICE_RESIST,
    LIGHTNING_RESIST,
    CHAOS_RESIST,
    RARITY,
    MINION_LEVEL,
    MELEE_LEVEL,
    FLAT_PHYSICAL_DAMAGE,
    FLAT_FIRE_DAMAGE,
    FLAT_ICE_DAMAGE,
    FLAT_LIGHTNING_DAMAGE,
    SPIRIT,
    MOVE_SPEED,
    ATTACK_SPEED,
    SPELL_CAST_SPEED
}

export class CArmor extends CBaseItem {

    armor: number | null
    evasion: number | null
    energyShield: number | null

    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);

        const splitItem = stringItem.split("--------")
        const characters = splitItem[1].split("\n")

        const qualityString = characters.find((string) => string.includes("Качество:"))
        let quality = qualityString ? +qualityString.match(/[+-]?\d+(\.\d+)?/g)![0] : 0

        const armorItem = characters.find((string) => string.includes("Броня:"))
        if (armorItem) {
            const value = +armorItem.match(/\d+/g)![0]
            this.armor = this.calculateValue(value, quality)
        }

        const evasionItem = characters.find((string) => string.includes("Уклонение:"))
        if (evasionItem) {
            const value = +evasionItem.match(/\d+/g)![0]
            this.evasion = this.calculateValue(value, quality)
        }

        const energyShieldItem = characters.find((string) => string.includes("Энергетический щит:"))
        if (energyShieldItem) {
            const value = +energyShieldItem.match(/\d+/g)![0]
            this.energyShield = this.calculateValue(value, quality)
        }

    }

}