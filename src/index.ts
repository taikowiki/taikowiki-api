import { DaniData } from "hiroba-js/types";
import { DaniVersion, DiffchartData, RatingData, RatingResponse, SongData, SongSearchData, SongSearchOption, Version } from "./types";

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

    /**
     * Retrieves the data of a specific song by its songNo. If an array of songNo values is provided, data for multiple songs can be retrieved.
     * @param songNo 
     */
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

    /**
     * Request data for all songs.
     */
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

    /**
     * Search songs that match the given options.
     * @param option 
     * @returns 
     */
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
        if (option?.genre) {
            url.searchParams.set('genre', option.genre.toString());
        }

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }

    /**
     * Requests rating.
     * If the value of the ratingData parameter is 'top50', additionally request rating data for the top 50 songs. If it is 'all', request rating data for all songs.
     */
    async rating(): Promise<RatingResponse>;
    async rating(ratingData: 'top50'): Promise<RatingResponse & { ratingData: RatingData }>;
    async rating(ratingData: 'all'): Promise<RatingResponse & { ratingData: RatingData }>;
    async rating(ratingData?: 'top50' | 'all') {
        const url = new URL(this.baseUrl);
        url.pathname = '/api/v1/rating';

        if (ratingData) {
            url.searchParams.set('ratingdata', ratingData);
        }

        const response = await fetch(url, {
            headers: {
                'x-api-key': this.key ?? ''
            }
        });

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }

    /**Request dan-i dojo versions. */
    async daniVersions(): Promise<string[]> {
        const url = new URL(this.baseUrl);
        url.pathname = '/api/v1/dani/version';

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }

    /**Request dan-i dojo data for specific version. */
    async dani(version: DaniVersion | (string & {})): Promise<DaniData> {
        const url = new URL(this.baseUrl);
        url.pathname = `/api/v1/dani/version/${encodeURIComponent(version)}`;

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }

    /**Request specific diffchart data. */
    async diffchart(type: 'clear' | 'fc' | 'dfc', level: number): Promise<DiffchartData> {
        const url = new URL(this.baseUrl);
        url.pathname = `/api/v1/diffchart`;

        url.searchParams.set('type', type);
        url.searchParams.set('level', level.toString());

        const response = await fetch(url);

        if (response.status !== 200) {
            throw response;
        }

        return await response.json();
    }
}

export { TaikowikiApi };
export default TaikowikiApi;