import { useEffect, useState } from "react";

const CreateRoomBtn = ({ socket }) => {
  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    socket.on("create-room-error", () => {
      setError("Name is already used!");
    });
  });

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
    setError();
  };
  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  }

  const createRoom = () => {
    if (roomName.length && playerName.length) {
      socket.emit("create-room", roomName+','+playerName);
    } else {
      setError("Room Name and Player Name is required!");
    }
  };

  return (
    <>
      <div className="d-flex mt20">
        <div className="text-input-container">
          <input
            type="text"
            placeholder="Enter Room name"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input"
          ></input>
        </div>
        <div className="text-input-container">
          <input
            type="text"
            placeholder="Enter Player name"
            value={playerName}
            onChange={handlePlayerNameChange}
            className="text-input"
          ></input>
        </div>
        <button onClick={createRoom}>Create</button>
      </div>
      {error ? <p className="error">{error}</p> : null}
    </>
  );
};

export default CreateRoomBtn;
