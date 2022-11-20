/**
 * Item is a class that represents a single event in the event stream.
 * 
 * 建立、清除 eventsource 并将数据传递给外部
 *
 */
import {Subject} from 'rxjs'

import { Data, Fetcher } from "../interface";


export class Item {

    constructor(
        private readonly changeSubject : Subject<Data>,
        private readonly fetcher : Fetcher,
    ) {

      this.fetcher.fetch().subscribe(this.changeSubject)
    }


    public channel(){
       return this.fetcher.fetch()
    }
}