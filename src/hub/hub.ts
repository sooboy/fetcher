/**
 * Hub is the central place for managing connections.
 * 
 */
import { Subject } from 'rxjs';
import { TickFetch } from '../fetcher/impl/tick';
import { Data, Fetcher } from '../interface';
import { Item } from './item';

export abstract class Hub {
    private readonly _channelSubject = new Subject<Data>();
    public readonly channel$ = this._channelSubject.asObservable();
    private readonly _items = new Map<string, Item>();

    protected abstract FetchConstract: new (code:string) => Fetcher;

    public get(code: string) {
        let item = this._items.get(code);
        if (!item) {
            item = new Item(this._channelSubject,new this.FetchConstract(code));
            this._items.set(code, item);
        }
        return item;
    }

    public channel(){
        return this.channel$
    }
}

export class TickHub extends Hub {
    protected FetchConstract = TickFetch;
}
