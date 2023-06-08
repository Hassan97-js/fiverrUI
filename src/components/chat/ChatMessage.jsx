function ChatMessage({ isSender }) {
  return (
    <div
      className={`flex gap-4 bg-gray-200/60 max-w-lg py-3 px-5 ${
        isSender
          ? "bg-green-200/50 rounded-tl-md self-end"
          : "rounded-tr-md self-start"
      } rounded-br-md rounded-bl-md mb-6`}>
      <img
        className="w-7 h-7 object-cover object-center rounded-full"
        src="https://picsum.photos/200"
        alt=""
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam eius
        tempora cupiditate nesciunt voluptatibus dolor libero magni quaerat? Nulla
        repellendus impedit ad omnis voluptates eaque iste veritatis molestiae.
        Aliquam.
      </p>
    </div>
  );
}

export default ChatMessage;
