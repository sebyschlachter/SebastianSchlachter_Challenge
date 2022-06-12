import ChatBox from "./chatbox";
import MessageForm from "./message_form";
// import Notification from "../notification";

const Chat = ({ socket, playerName }) => {
  return (
    <div className="chat-container">
      {/* <Notification socket={socket} /> */}
      <ChatBox socket={socket}  />
      <MessageForm socket={socket} playerName={playerName} />
    </div>
  );
};

export default Chat;
