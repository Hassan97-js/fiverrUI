import { Breadcrumb, ChatInput, ChatRoom } from "../../components";

import "./Message.css";

const Message = () => {
  return (
    <section className="section-container">
      <Breadcrumb />
      <ChatRoom />
      <ChatInput />
    </section>
  );
};

export default Message;
