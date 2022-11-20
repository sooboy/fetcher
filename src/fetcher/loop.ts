import { Fetch } from './fetch';

export class LoopFetch extends Fetch{
         
        private _timer : number | null = null;
    
        constructor(
            public readonly code : string,
            public readonly geter: (code:string)=>string,
            public readonly interval : number,
        ) {
            super();
            this.load();
        }
    
        private timerCreate() {
            this._timer = setInterval(() => {
                this.geter
            }, this.interval);
        }
        private timerClose() {
            this._timer && clearInterval(this._timer);
        }
    
        public load(){
            this.timerClose();
            this.timerCreate();
        }
}