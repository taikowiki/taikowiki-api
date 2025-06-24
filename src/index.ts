import { SongData, SongSearchData, SongSearchOption } from "./types";

class TaikowikiApi {
    baseUrl = new URL("https://taiko.wiki");
    key?: string;

    constructor(option?: { key?: string, url?: string | URL }) {
        if (option?.key) {
            this.key = option.key;
        }
        if (option?.url) {
            this.baseUrl = new URL(option.url);
        }
    }

    async song(songNo: string): Promise<SongData>;
    async song(songNo: string[]): Promise<SongData[]>;
    async song(songNo: string | string[]) {
        const url = new URL(this.baseUrl);
        if (Array.isArray(songNo)) {
            url.pathname = `/api/v1/song/no`;
            url.searchParams.set('songno', JSON.stringify(songNo))
        }
        else {
            url.pathname = `/api/v1/song/no/${encodeURIComponent(songNo)}`;
        }

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }

    async songAll(after?: number): Promise<SongData[]> {
        const url = new URL(this.baseUrl);
        url.pathname = '/api/v1/song/all';
        if (after) {
            url.searchParams.set('after', after.toString());
        }

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }

    async songSearch(option?: Partial<SongSearchOption>): Promise<SongSearchData[]> {
        const url = new URL(this.baseUrl);
        url.pathname = '/api/v1/song/search';
        if (option?.query) {
            url.searchParams.set('query', option.query);
        }
        if (option?.difficulty) {
            url.searchParams.set('difficulty', option.difficulty);
        }
        if (option?.level) {
            url.searchParams.set('level', option.level.toString());
        }

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }
}

export { TaikowikiApi };
export default TaikowikiApi;