import {IAdditionalPattern} from "../../parser/types.ts";

export const ALL_CHARACTERS: IAdditionalPattern = {
    pattern: /^\+(\d+) ко всем характеристикам$/,
    option: "# ко всем характеристикам"
}

export const INTELLIGENT: IAdditionalPattern = {
    pattern:
        /^\+(\d+) к интеллекту$/,
    option: "# к интеллекту"
}

export const STRENGTH: IAdditionalPattern = {
    pattern:
        /^\+(\d+) к силе$/,
    option: "# к силе"
}

export const DEXTERITY: IAdditionalPattern = {
    pattern:
        /^\+(\d+) к ловкости$/, option: "# к ловкости"
}

export const LIFE: IAdditionalPattern = {
    pattern: /^\+(\d+) к максимуму здоровья$/,
    option: "# к максимуму здоровья"
};

export const LIFE_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение максимума здоровья$/,
    option: "#% увеличение максимума здоровья"
}

export const LIFE_REGENERATION: IAdditionalPattern = {
    pattern: /^Регенерация (\d+\.?\d*) здоровья в секунду$/,
    option: "Регенерация # здоровья в секунду"
};

export const LIFE_REGENERATION_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости регенерации здоровья$/,
    option: "#% повышение скорости регенерации здоровья"
}

export const MANA: IAdditionalPattern = {
    pattern: /^\+(\d+) к максимуму маны$/,
    option: "# к максимуму маны"
};

export const MANA_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение максимума маны$/,
    option: "#% увеличение максимума маны"
}

export const MANA_REGEN: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости регенерации маны$/,
    option: "#% повышение скорости регенерации маны"
};