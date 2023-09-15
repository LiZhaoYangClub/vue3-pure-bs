# Hooks

## websocket

```ts
import { useWsHook } from "@/hooks/websocket";

const { initSocket, disconnect, sendMsg } = useWsHook();

const url = `${window.websocketPreUrl}/ws-portal/ws`;

initSocket(
  {
    url,
    headers: {},
    subscribes: {
      waterQuality: "/topic/waterQuality",
      alarm: "/topic/alarm",
      park: "/topic/park"
    }
  },
  (subscribesKey, response) => {
    console.log(subscribesKey, response);
  }
);

sendMsg(topic, params);
```

## element-resize-detector"

```ts
import { useResizeHook } from "@/hooks/resize";

const { erd } = useResizeHook();

erd.listenTo(document.getElementById("test"), function (element) {
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  console.log("Size: " + width + "x" + height);
});
```
