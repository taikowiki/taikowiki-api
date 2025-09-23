import type { getRating } from '@taiko-wiki/taiko-rating';
import type { CardData, Difficulty } from 'hiroba-js/types';

export const VERSION = [
    ["NAC"],
    ["AC1", "AC2", "AC3", "AC4", "AC5", "AC6", "AC7", "AC8", "AC9", "AC10", "AC11", "AC12", "AC12.5", "AC13", "AC14"],
    ["DF"],
    ["NS2", "NS1", "NSRPG"],
    ["PS4"],
    ["TDM"],
    ["WiiU1", "WiiU2", "WiiU3"],
    ["Wii1", "Wii2", "Wii3", "Wii4", "Wii5"],
    ["PS2-1", "PS2-2", "PS2-3", "PS2-4", "PS2-5", "PS2-6", "PS2-7", "PS2Anime1", "PS2Anime2", "PS2TDM"],
    ["PSP1", "PSP2", "PSPDX"],
    ["DS1", "DS2", "DS3"],
    ["V", "IDM"],
    ["3DS1", "3DS2", "3DS3"],
    ["PLUS", "PTB", "RC"]
] as const;
export const GENRE = ["pops", "anime", "kids", "game", "variety", "namco", "vocaloid", "classic"] as const;
export const DANIVERSION = ["katsudon", "sorairo", "momoiro", "kimidori", "murasaki", "white", "red", "yellow", "blue", "green", "nijiiro_gaiden", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"] as const;
export const REGULAR_DAN = ["senpo", "jiho", "chiuken", "fukusho", "taisho", "beginner", "10kyu", "9kyu", "8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu", "1dan", "2dan", "3dan", "4dan", "5dan", "6dan", "7dan", "8dan", "9dan", "10dan", "kuroto", "meijin", "chojin", "tatsujin"] as const;
export const DAN = [...REGULAR_DAN, "gaiden"] as const;
export type Version = typeof VERSION[number][number];
export type Genre = typeof GENRE[number];
export type DaniVersion = typeof DANIVERSION[number];
export type Dan = typeof DAN[number];

export type DaniSongData = {
    songNo: string;
    difficulty: Difficulty;
}
export type DaniConditionData = {
    type: ("gauge") | ("combo") | ("score") | ("roll") | ("hit") | ("good") | ("ok") | ("bad") | ("score_sum"),
    criteria: {
        red: number[],
        gold: number[]
    }
}
export type Dani = {
    version: DaniVersion;
    dan: Dan;
    name: string | null;
    songs: [DaniSongData, DaniSongData, DaniSongData],
    conditions: DaniConditionData[]
}
export interface DaniData {
    version: DaniVersion;
    data: Dani[];
}
export type Course = {
    level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    isBranched: 1 | 0;
    maxCombo: number;
    playTime: number;
    balloon: number[];
    rollTime: number[];
    maxDensity: number;
    daniUsed: 1 | 0;
    dani: Dani[];
    images: string[];
}
export type SongData = {
    songNo: string;
    title: string;
    titleKo: string | null;
    aliasKo: string | null;
    titleEn: string | null;
    aliasEn: string | null;
    romaji: string | null;
    bpm: Record<'min' | 'max', number>;
    bpmShiver: 1 | 0;
    version: Version[];
    isAsiaBanned: 1 | 0;
    isKrBanned: 1 | 0;
    genre: Genre[];
    artists: string[];
    addedDate: number | null;
    courses: Record<"easy" | "normal" | "hard" | "oni", Course> & Record<"ura", Course | null>
    isDeleted: 1 | 0;
}

export type SongSearchOption = {
    query: string,
    difficulty: 'easy' | 'normal' | 'hard' | 'oni' | 'ura' | 'oniura',
    level: number,
    genre: Genre
};

export type SongSearchData = Pick<SongData, "songNo" | "genre" | "title" | "titleKo" | "aliasKo" | "titleEn" | "aliasEn" | "artists" | "romaji"> & {
    level: {
        easy: number,
        normal: number,
        hard: number,
        oni: number,
        ura: number | null
    }
}

export type DonderData = CardData;
export type RatingData = ReturnType<typeof getRating>['songRatingDatas'];
export type RatingResponse = {
    donder: DonderData,
    currentRating: number
}

export type DiffchartData = {
    name: string;
    level: number;
    type: "clear" | "fc" | "dfc";
    data: {
        name: string;
        sections: {
            name: string;
            order: number;
            songs: {
                order: number;
                songNo: string;
                title: string;
                difficulty: "easy" | "normal" | "hard" | "oni" | "ura";
            }[];
            color?: string | undefined;
            backgroundColor?: string | undefined;
        }[];
        color?: string | undefined;
        backgroundColor?: string | undefined;
    };
    comment: string | null;
}