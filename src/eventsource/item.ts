/**
 * Item is a class that represents a single event in the event stream.
 * 
 * 建立、清除 eventsource 并将数据传递给外部
 *
 */

import EventSource from "eventsource";
import {Subject} from 'rxjs'

import { Data } from "../interface";

const makeUrl = (stockCode: string) => {
    const prefix = stockCode.charAt(0) === '6' ? '1' : '0';
    return `http://60.push2.eastmoney.com/api/qt/stock/details/sse?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55&mpi=1000&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&pos=-50&secid=${prefix}.${stockCode}&wbp2u=|0|0|0|web`;
}

export class Item {
    private _es : EventSource | null = null;
    private _subject = new Subject<Data>();
    constructor(
        public readonly code : string,
        private readonly changeSubject : Subject<Data>
    ) {

       this._subject.subscribe(this.changeSubject);

       this.load();
    }

    private esCreate() {
        this._es = new EventSource(makeUrl(this.code));
        this._es.onmessage = (msg) => {
            this._subject.next({
                code: this.code,
                data: msg.data,
                time: Date.now()
            })
        }
    }
    private esClose() {
        this._es?.close();
    }

    public load(){
        this.esClose();
        this.esCreate();
    }

    public channel(){
        return this._subject.asObservable();
    }
}