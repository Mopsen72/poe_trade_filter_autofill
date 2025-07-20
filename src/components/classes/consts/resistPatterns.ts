import {IAdditionalPattern} from "../../parser/types.ts";

export const ELEMENTAL_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к сопротивлению всем стихиям$/,
    option: "#% к сопротивлению всем стихиям"
};

export const FIRE_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к сопротивлению огню$/,
    option: "#% к сопротивлению огню"
};

export const ICE_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к сопротивлению холоду$/,
    option: "#% к сопротивлению холоду"
};

export const LIGHTNING_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к сопротивлению молнии$/,
    option: "#% к сопротивлению молнии"
};

export const CHAOS_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к сопротивлению хаосу$/,
    option: "#% к сопротивлению хаосу"
};

export const MAX_FIRE_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к максимальному сопротивлению огню$/,
    option: "#% к максимальному сопротивлению огню"
};

export const MAX_COLD_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к максимальному сопротивлению холоду$/,
    option: "#% к максимальному сопротивлению холоду"
};

export const MAX_LIGHTNING_RESIST: IAdditionalPattern = {
    pattern: /^(\+\d+)% к максимальному сопротивлению молнии$/,
    option: "#% к максимальному сопротивлению молнии"
};