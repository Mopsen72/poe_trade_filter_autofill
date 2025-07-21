import {IAdditionalPattern} from "~/components/parser/types.ts";

export const SPELL_CAST_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости сотворения чар$/,
    option: "#% повышение скорости сотворения чар"
};
export const PHYSICAL_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение физического урона от чар$/,
    option: "#% увеличение физического урона от чар"
};

export const FIRE_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от огня$/,
    option: "#% увеличение урона от огня"
};

export const ICE_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от холода$/,
    option: "#% увеличение урона от холода"
};

export const LIGHTNING_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от молнии$/,
    option: "#% увеличение урона от молнии"
};

export const CHAOS_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от хаоса$/,
    option: "#% увеличение урона от хаоса"
};

export const SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от чар$/,
    option: "#% увеличение урона от чар"
};

export const SPELL_ELEMENTAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от стихий$/,
    option: "#% увеличение урона от стихий"
}

export const CRITICAL_CHANCE_SPELL: IAdditionalPattern = {
    pattern: /^(\d+\.?\d*)% повышение шанса критического удара для чар$/,
    option: "#% повышение шанса критического удара для чар"
};

export const CRITICAL_DAMAGE_SPELL: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение бонуса к критическому урону от чар$/,
    option: "#% увеличение бонуса к критическому урону от чар"
};

export const PHYSICAL_SPELL_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений физических чар$/,
    option: "# к уровню всех камней умений физических чар"
};

export const FIRE_SPELL_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений чар огня$/,
    option: "# к уровню всех камней умений чар огня"
};

export const ICE_SPELL_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений чар холода$/,
    option: "# к уровню всех камней умений чар холода"
};

export const LIGHTNING_SPELL_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений чар молнии$/,
    option: "# к уровню всех камней умений чар молнии"
};

export const CHAOS_SPELL_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений чар хаоса$/,
    option: "# к уровню всех камней умений чар хаоса"
};

export const SPELL_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений чар$/,
    option: "# к уровню всех камней умений чар"
};

export const AUTO_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^Срабатывающие чары наносят увеличенный на (\d+)% урон от чар$/,
    option: "Срабатывающие чары наносят увеличенный на #% урон от чар"
}