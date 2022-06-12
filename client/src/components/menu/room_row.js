import { useEffect, useState } from "react";

const RoomRow = (props) => {
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState();
  useEffect(() => {
    props.socket.on("set-name-error", () => {
      setError("Name is already used!");
    });
  });
  const joinRoom = () => {
    if(playerName){
      props.socket.emit("join-room", props.name+","+playerName);
    }else{
      setError("Room Name is required!");
    }
  };
  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
    setError();
  }
  return (
    <>
      <div className="border mt20 d-flex p10 mill-row">
          {props.name}
        <div className="text-input-container2">
          <input
            type="text"
            placeholder="Enter Player name"
            value={playerName}
            onChange={handlePlayerNameChange}
            className="text-input"
          ></input>
        </div>
        <button onClick={joinRoom}>Join</button>
      </div>
      {error ? <p className="error">{error}</p> : null}
    </>
  );
};

export default RoomRow;
