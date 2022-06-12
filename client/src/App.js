import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import Room from "./components/room/room";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [data, setData] = useState();
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayersNames] = useState([]);

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

    socket.on("data", (receivedData) => {
      setData(receivedData);
    });
    socket.on("playerName", (playerName) => {
      setPlayerName(playerName);
    });
    socket.on("players", (players) => {
      setPlayersNames(players);
    });
    
  }, []);

  const content = () => {
    if (!(connectedSocket && data)) return null;

    const { room } = data;
    
    if (room === "menu") {
      return (
        <Menu
          socket={connectedSocket}
          rooms={data.availableRooms}
          socketName={data.socketName}
        />
      );
    }

    return <Room socket={connectedSocket} {...room} playerName={playerName} 
    opponentPlayer={playerName==players[0] ? players[1] : players[0]}  />;
  };

  return <div className="container">{content()}</div>;
}

export default App;
