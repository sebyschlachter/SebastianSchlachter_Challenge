import { useState } from "react";

const MessageForm = ({ socket, playerName }) => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  
  // const [name, setName] = useState("");

  const sendMessage = () => {
    // socket.emit("new-message", { name, message, roomName });
    socket.emit("new-message", color+":"+playerName+":"+ message);
    setMessage("");
  };

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleColorInputChange = (e) => {
    setColor(e.target.value);
  };

  // const handleNameInputChange = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <div className="message-input">
       <input
        value={color}
        type="color"
        onChange={handleColorInputChange}
      ></input> 
      <input
        className="chat-input-field"
        value={message}
        placeholder="Enter a message"
        type="text"
        onChange={handleMessageInputChange}
      ></input>
      <button onClick={sendMessage}>💬</button>
    </div>
  );
};

export default MessageForm;
