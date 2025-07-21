import {CBaseItem} from "./base.ts";
import {IAdditionalPattern} from "../parser/types.ts";
import {
    CHAOS_RESIST,
    ELEMENTAL_RESIST,
    FIRE_RESIST,
    ICE_RESIST,
    LIGHTNING_RESIST,
    MAX_COLD_RESIST,
    MAX_FIRE_RESIST,
    MAX_LIGHTNING_RESIST,
} from "./consts/resistPatterns.ts";
import {FLAT_THORN_DAMAGE} from "./consts/patterns.ts"
import {ALL_CHARACTERS, DEXTERITY, INTELLIGENT, LIFE, MANA, STRENGTH} from "./consts/characterPatterns.ts";

const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    LIFE,
    MANA,
    ELEMENTAL_RESIST,
    FIRE_RESIST,
    ICE_RESIST,
    LIGHTNING_RESIST,
    CHAOS_RESIST,
    MAX_FIRE_RESIST,
    MAX_COLD_RESIST,
    MAX_LIGHTNING_RESIST,
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    FLAT_THORN_DAMAGE
}

export class CShield extends CBaseItem {

    armor: number | null
    evasion: number | null
    energyShield: number | null
    block: number | null

    constructor(itemString: string) {
        super(itemString, MODIFIER_PATTERNS);

        const splitItem = itemString.split("--------")
        const shieldCharacters = splitItem[1].split("\n")

        const qualityString = shieldCharacters.find((string) => string.includes("Качество:"))
        let quality = qualityString ? +qualityString.match(/[+-]?\d+(\.\d+)?/g)![0] : 0

        const blockChance = shieldCharacters.find((string) => string.includes("Шанс блока:"))
        if (blockChance) {
            this.block = +blockChance.match(/\d+/g)![0]
        } else {
            this.block = null
        }

        const armorItem = shieldCharacters.find((string) => string.includes("Броня:"))
        if (armorItem) {
            const value = +armorItem.match(/\d+/g)![0]
            this.armor = this.calculateValue(value, quality)
        } else {
            this.armor = null
        }

        const evasionItem = shieldCharacters.find((string) => string.includes("Уклонение:"))
        if (evasionItem) {
            const value = +evasionItem.match(/\d+/g)![0]
            this.evasion = this.calculateValue(value, quality)
        } else {
            this.evasion = null
        }

        const energyShieldItem = shieldCharacters.find((string) => string.includes("Энергетический щит:"))
        if (energyShieldItem) {
            const value = +energyShieldItem.match(/\d+/g)![0]
            this.energyShield = this.calculateValue(value, quality)
        } else {
            this.energyShield = null
        }

    }


}