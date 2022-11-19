import { Hub } from "./eventsource/hub";

const list = ["002223","603363"];

const hub = new Hub();

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