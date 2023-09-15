import { ref } from "vue";
import Stomp from "stompjs";
import Socket from "sockjs-client/dist/sockjs.min.js";

interface Options {
  url: string;
  headers: Recordable;
  subscribes: Recordable;
  timeout?: number;
}

const useWsHook = () => {
  const socket = ref(null);
  const stompClient = ref(null);
  const header = ref<Recordable>({});

  const initSocket = async (options: Options, cb: () => void) => {
    const { url, headers = {}, subscribes = {}, timeout = 15000 } = options;

    header.value = headers;

    socket.value = new Socket(url, null, {
      timeout
    });

    stompClient.value = Stomp.over(socket.value);

    await connect(headers);
    Object.keys(subscribes).map(dataKey =>
      subscribe(subscribes[dataKey], dataKey, cb)
    );
  };

  const connect = (headers: Recordable) =>
    new Promise((resolve, reject) => {
      stompClient.value.connect(
        headers,
        res => resolve(res),
        error => reject(error)
      );
    });

  const subscribe = (topic, dataKey, callback) => {
    stompClient.value.subscribe(topic, async response => {
      callback(dataKey, response);
    });
  };

  const sendMsg = (topic: string, data) =>
    stompClient.value.send(topic, header.value, data);

  const disconnect = () => {
    stompClient.value?.disconnect?.();
    stompClient.value = null;
    socket.value = null;
  };

  return {
    initSocket,
    disconnect,
    sendMsg,
    socket,
    stompClient
  };
};

export default useWsHook;
