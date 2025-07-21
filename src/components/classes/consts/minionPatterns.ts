import {IAdditionalPattern} from "../../parser/types.ts";

export const MINION_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений приспешников$/,
    option: "# к уровню всех камней умений приспешников"
};
export const ALLY_SPELL_CAST_SPEED: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии имеют (\d+)% повышение скорости сотворения чар$/,
    option: "Союзники в вашем присутствии имеют #% повышение скорости сотворения чар"
};

export const ALLY_ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии имеют (\d+)% повышение скорости атаки$/,
    option: "Союзники в вашем присутствии имеют #% повышение скорости атаки"
};

export const MINION_SPEED: IAdditionalPattern = {
    pattern: /^Приспешники имеют (\d+)% повышение скорости атаки и сотворения чар$/,
    option: "Приспешники имеют #% повышение скорости атаки и сотворения чар"
}

export const ALLY_DAMAGE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии наносят увеличенный на (\d+)% урон$/,
    option: "Союзники в вашем присутствии наносят увеличенный на #% урон"
};

export const MINION_DAMAGE: IAdditionalPattern = {
    pattern: /^Приспешники имеют (\d+)% увеличение урона$/,
    option: "Приспешники имеют #% увеличение урона"
}

export const ALLY_CRITICAL_CHANCE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии имеют (\d+)% увеличение шанса критического удара$/,
    option: "Союзники в вашем присутствии имеют #% увеличение шанса критического удара"
};

export const MINION_CRITICAL_CHANCE: IAdditionalPattern = {
    pattern: /^Приспешники имеют (\d+)% повышение шанса критического удара$/,
    option: "Приспешники имеют #% повышение шанса критического удара"
}
export const MINION_CRITICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение бонуса к критическому урону приспешников$/,
    option: "% увеличение бонуса к критическому урону приспешников"
}

export const MINION_LIFE: IAdditionalPattern = {
    pattern: /^Приспешники имеют (\d+)% увеличение максимума здоровья$/,
    option: "Приспешники имеют #% увеличение максимума здоровья"
};

export const MINION_LIFE_REGEN: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии регенерируют (\d+\.?\d*) здоровья в секунду$/,
    option: "Союзники в вашем присутствии регенерируют # здоровья в секунду"
};

export const ALLY_ELEMENTAL_RESIST: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии получают (\d+)% к сопротивлению всем стихиям$/,
    option: "Союзники в вашем присутствии получают #% к сопротивлению всем стихиям"
};

export const MINION_ELEMENTAL_RESIST: IAdditionalPattern = {
    pattern: /^Приспешники имеют \+(\d+)% к сопротивлению всем стихиям$/,
    option: "Приспешники имеют #% к сопротивлению всем стихиям"
}

export const MINION_CHAOS_RESIST: IAdditionalPattern = {
    pattern: /^Приспешники имеют \+(\d+)% к сопротивлению хаосу$/,
    option: "Приспешники имеют #% к сопротивлению хаосу"
}

export const MINION_PHYSICAL_FLAT_DAMAGE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии наносят от (\d+) до (\d+) дополнительного физического урона атаками$/,
    option: "Союзники в вашем присутствии наносят от # до # дополнительного физического урона атаками"
};

export const MINION_FIRE_FLAT_DAMAGE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии наносят от (\d+) до (\d+) дополнительного урона от огня атаками$/,
    option: "Союзники в вашем присутствии наносят от # до # дополнительного урона от огня атаками"
};

export const MINION_ICE_FLAT_DAMAGE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии наносят от (\d+) до (\d+) дополнительного урона от холода атаками$/,
    option: "Союзники в вашем присутствии наносят от # до # дополнительного урона от холода атаками"
};

export const MINION_LIGHTNING_FLAT_DAMAGE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии наносят от (\d+) до (\d+) дополнительного урона от молнии атаками$/,
    option: "Союзники в вашем присутствии наносят от # до # дополнительного урона от молнии атаками"
};

export const COMPANION_DAMAGE: IAdditionalPattern = {
    pattern: /^Компаньоны наносят увеличенный на (\d+)% урон$/,
    option: "Компаньоны наносят увеличенный на #% урон"
}

export const COMPANION_LIFE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение максимума здоровья компаньонов$/,
    option: "#% увеличение максимума здоровья компаньонов"
}