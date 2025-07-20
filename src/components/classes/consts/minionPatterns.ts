import {IAdditionalPattern} from "../../parser/types.ts";

export const MINION_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений приспешников$/,
    option: "# к уровню всех камней умений приспешников"
};
export const MINION_SPELL_CAST_SPEED: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии имеют (\d+)% повышение скорости сотворения чар$/,
    option: "Союзники в вашем присутствии имеют #% повышение скорости сотворения чар"
};

export const MINION_ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии имеют (\d+)% повышение скорости атаки$/,
    option: "Союзники в вашем присутствии имеют #% повышение скорости атаки"
};

export const MINION_DAMAGE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии наносят увеличенный на (\d+)% урон$/,
    option: "Союзники в вашем присутствии наносят увеличенный на #% урон"
};

export const MINION_CRITICAL_CHANCE: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии имеют (\d+)% увеличение шанса критического удара$/,
    option: "Союзники в вашем присутствии имеют #% увеличение шанса критического удара"
};

export const MINION_LIFE: IAdditionalPattern = {
    pattern: /^Приспешники имеют (\d+)% увеличение максимума здоровья$/,
    option: "Приспешники имеют #% увеличение максимума здоровья"
};

export const MINION_LIFE_REGEN: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии регенерируют (\d+\.?\d*) здоровья в секунду$/,
    option: "Союзники в вашем присутствии регенерируют # здоровья в секунду"
};

export const MINION_ELEMENTAL_RESIST: IAdditionalPattern = {
    pattern: /^Союзники в вашем присутствии получают (\d+)% к сопротивлению всем стихиям$/,
    option: "Союзники в вашем присутствии получают #% к сопротивлению всем стихиям"
};

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