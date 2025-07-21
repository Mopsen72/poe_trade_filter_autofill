import {IAdditionalPattern} from "../../parser/types.ts";

export const FLAT_PHYSICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) физического урона к атакам$/,
    option: "Добавляет от # до # физического урона к атакам"
};

export const FLAT_FIRE_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) урона от огня к атакам$/,
    option: "Добавляет от # до # урона от огня к атакам"
};

export const FLAT_ICE_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) урона от холода к атакам$/,
    option: "Добавляет от # до # урона от холода к атакам"
};

export const FLAT_LIGHTNING_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) урона от молнии к атакам$/,
    option: "Добавляет от # до # урона от молнии к атакам"
};

export const ELEMENTAL_DAMAGE_ATTACK: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от стихий от умений атак$/,
    option: "#% увеличение урона от стихий от умений атак"
}

export const ATTACK_DAMAGE_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от атак$/,
    option: "#% увеличение урона от атак"
}

export const ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости атаки$/,
    option: "#% повышение скорости атаки"
};

export const CRITICAL_CHANCE_ATTACK: IAdditionalPattern = {
    pattern: /^(\d+\.?\d*)% повышение шанса критического удара атаками$/,
    option: "#% повышение шанса критического удара атаками"
};

export const CRITICAL_DAMAGE_ATTACK: IAdditionalPattern = {
    pattern: /^(\d+)% к бонусу критического урона для урона атаками$/,
    option: "#% к бонусу критического урона для урона атаками"
};

export const MACE_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона булавами$/,
    option: "#% увеличение урона булавами"
}

export const MELEE_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона в ближнем бою$/,
    option: "#% увеличение урона в ближнем бою"
}

export const FRENZY_ON_ATTACK: IAdditionalPattern = {
    pattern: /^Дарует (\d+) свирепости при нанесении удара в ближнем бою$/,
    option: "Дарует # свирепости при нанесении удара в ближнем бою"
}

export const FRENZY_ON_TAKE_ATTACK: IAdditionalPattern = {
    pattern: /^Дарует (\d+) свирепости при получении удара от врага$/,
    option: "Дарует # свирепости при получении удара от врага"
}