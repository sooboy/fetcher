import { tickLine } from '../../url';
import { EventSourceFetch  } from '../eventsource';

export class TickFetch extends EventSourceFetch {
    constructor(
        code: string,
    ) {
        super(code, tickLine(code));
    }
}