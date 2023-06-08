import { Breadcrumb, ChatInput, ChatRoom } from "../components";

function Message() {
  return (
    <section className="section-container">
      <Breadcrumb />
      <ChatRoom />
      <ChatInput />
    </section>
  );
}

export default Message;
