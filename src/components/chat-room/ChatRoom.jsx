import ChatMessage from "../chat-message/ChatMessage";

const ChatRoom = () => {
  return (
    <div className="flex flex-col bg-gray-50/80 w-full p-8 rounded-lg">
      <ChatMessage isSender={true} />
      <ChatMessage isSender={false} />
      <ChatMessage isSender={true} />

      <ChatMessage isSender={true} />
      <ChatMessage isSender={false} />
      <ChatMessage isSender={true} />
    </div>
  );
};

export default ChatRoom;
