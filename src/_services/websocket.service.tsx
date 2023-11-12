import { WebsocketContext, socket } from "../contexts/rooms/WebSocketsContext";

import { Card } from "../types/room";
import { useContext } from "react";

const useWebSockets = () => {
  const { setRoomValue, pile, roomName, roomValue } =
    useContext(WebsocketContext);

  const onCreateRoom = () => {
    socket.emit("createRoom");
    console.log("bonjour room créer");
  };

  const onJoinRoom = () => {
    socket.emit("joinRoom", roomValue);
    setRoomValue("");
  };

  const playCard = (card: Card) => {
    console.log("Sending playCard event to the server");
    console.log("Pile before emitting playCard:", pile);
    socket.emit("playCard", {
      card,
      room: roomName,
      lastCard: pile[pile.length - 1],
    });
  };

  return {
    onCreateRoom,
    onJoinRoom,
    playCard,
  };
};

export default useWebSockets;
