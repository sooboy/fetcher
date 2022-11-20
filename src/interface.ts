import type { Observable } from "rxjs";

export interface Data {
	code: string;
    time: number;
	data: string;
}

export interface Fetcher {
    fetch(): Observable<Data>;
}
