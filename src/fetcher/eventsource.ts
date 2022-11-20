import EventSource from "eventsource";

import { Fetch } from './fetch';

export class EventSourceFetch extends Fetch{
         
        private _es : EventSource | null = null;
    
        constructor(
            public readonly code : string,
            public readonly url: string,
        ) {
            console.log("url is :",url)
            super();
            this.load();
        }
    
        private esCreate() {
            console.log("this.url is :",this.url)
            this._es = new EventSource(this.url);
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
}