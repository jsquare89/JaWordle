import { useState, useRef } from "react";
import { nanoid } from "nanoid";

export default function useMessageQueue() {
  const [messages, setMessages] = useState([]);

  const ref = useRef();
  ref.current = messages;

  function addMessage(value, timeout = 1500) {
    const id = nanoid();
    setMessages([
      ...messages,
      {
        id: id,
        value,
        timeout: setTimeout(() => {
          removeMessage(id);
        }, timeout),
      },
    ]);
  }

  function removeMessage(id) {
    setMessages(ref.current.filter((msg) => msg.id !== id));
  }

  return { addMessage, removeMessage, messages };
}
