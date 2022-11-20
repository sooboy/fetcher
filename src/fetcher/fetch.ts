import { Observable, Subject } from "rxjs";
import { Data, Fetcher } from "../interface";

export abstract class Fetch implements Fetcher {

    protected _subject = new Subject<Data>();

    abstract load(): void;

    fetch(): Observable<Data> {
        return this._subject.asObservable();
    }
}