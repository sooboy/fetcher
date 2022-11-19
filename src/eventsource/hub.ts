/**
 * Hub is the central place for managing connections.
 * 
 */
import { Subject } from 'rxjs';
import { Data } from '../interface';
import { Item } from './item';

export class Hub {
    private readonly _channelSubject = new Subject<Data>();
    public readonly channel$ = this._channelSubject.asObservable();

    private readonly _items = new Map<string, Item>();

    public get(code: string) {
        let item = this._items.get(code);
        if (!item) {
            item = new Item(code, this._channelSubject);
            this._items.set(code, item);
        }
        return item;
    }

    public channel(){
        return this.channel$
    }
}