import {IAdditionalOption, IAdditionalPattern} from "../parser/types.ts";

export class CBaseItem {

    additional: IAdditionalOption[]

    constructor(itemString: string, patterns: Record<string, IAdditionalPattern>) {
        const splitItem = itemString.split("--------")

        const additionalFromItem = this.getInitAdditional(splitItem)

        if (additionalFromItem) {
            const splitedOption = additionalFromItem.split("\n")
            this.additional = splitedOption.map((el) => {
                return this.parseModifierText(patterns, el)
            }).filter((el) => el.type !== "UNKNOWN")
        } else {
            this.additional = []
        }
    }

    getInitAdditional(splitedItem: string[]) {
        let result: string | null = null
        for (let string of splitedItem) {
            if (!string.includes("Класс предмета") &&
                !string.includes("Требуется:") &&
                !string.includes("Атак в секунду:") &&
                !string.includes("Броня:") &&
                !string.includes("Энергетический щит:") &&
                !string.includes("Уклонение:") &&
                !string.includes("Шанс блока:") &&
                !string.includes("Гнезда:") &&
                !string.includes("Уровень предмета:") &&
                !string.includes("Дарует умение:") &&
                !string.includes("Осквернено") &&
                !string.includes("(rune)") &&
                !string.includes("(implicit)") &&
                !string.includes("(enchant)") &&
                !string.includes("(augmented)") &&
                !string.includes("Можно использовать только с луком в руках.") &&
                string.match(/(\d+)/g)
            ) {
                result = string
                break;
            }
        }
        return result
    }

    parseModifierText(patterns: Record<string, IAdditionalPattern>, string: string): IAdditionalOption {
        for (const [type, obj] of Object.entries(patterns)) {
            const match = string.match(obj.pattern);
            if (match) {
                return {type, optionLabel: string, option: obj.option, match: match.slice(1)};
            }
        }
        return {type: 'UNKNOWN', optionLabel: string, option: "", match: []};
    }

    calculateValue(characterValue: number, quality: number) {

        if (characterValue > 0 && quality >= 20) {
            return characterValue

        } else if (characterValue > 0 && quality < 20) {
            const pureValue = characterValue * 100 / (100 + quality)
            return (pureValue * 1.20)

        } else {
            return null
        }
    }
}