import { TickHub } from "./hub/hub";

const list = ["002223","603363"];

const hub = new TickHub();

const channel = hub.channel();

for (const code of list) {
   const item = hub.get(code);
   item.channel().subscribe(data =>{
        console.log("item data :",data)
   })
}

channel.subscribe((data) => {
    console.log(data);
});