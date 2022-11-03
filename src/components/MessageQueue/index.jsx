import React from "react";
import Item from "./item";

export { default as useMessageQueue } from "./provider";

const MessageQueue = ({ messages }) => {
  return (
    <div className="absolute flex flex-col top-4 left-[50%]">
      {messages.map((msg) => (
        <Item key={msg.id} message={msg.value} />
      ))}
    </div>
  );
};

export default MessageQueue;
