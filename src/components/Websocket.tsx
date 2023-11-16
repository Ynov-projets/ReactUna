import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

type messagePayload = {
  content: {
    text: string;
    room: string;
  };
  msg: string;
  clientId: string;
};

type RoomPayload = {
  msg: string;
  room: string;
  participants: string[];
  turn: string;
  playerCards: Record<string, Card[]>; // New property for player cards
};

type turnPayload = {
  room: string;
  turn: string;
  playerHandLength: Record<string, number>;
};

type Card = {
  id: number;
  color: "red" | "blue" | "green" | "yellow"| string;
  value: string;
  effect: string;
};

type cardsPayload = {
    cards: Card[],
    playerHandLength: Record<string, number>,
};

type playCardPayload = {
    card: Card,
    playerId: string,
}

type gamePayload = {
    msg: string,
    winner: string,
}

export const Websocket = () => {
  const [error, setError] = useState("");
  const [turn, setTurn] = useState("");
  const [roomValue, setRoomValue] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState<messagePayload[]>([]);
  const [playerCards, setPlayerCards] = useState<Record<string, Card[]>>({});
        /*
      playerHandLength: Object {
      "QoCXY65fNNLIZecyAAA1": 1,
      "7yg4yqecW5zVQ81sAAA3": 2,
      "bWZTJ2dagIPI-yIoAAA5": 2,
      "eJ3CvWAtuvLC3cs6AAA7": 2
      }*/
  const [playerHandLength, setPlayerHandLength] = useState<Record<string, number>>({});
  const [pile, setPile] = useState<Card[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const socket = useContext(WebsocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("onMessage", (newMessage: messagePayload) => {
      console.log("onMessage event received");
      console.log(newMessage);
      setMessages((prev) => [...prev, newMessage]);
    });

    socket.on("onRoomCreated", (room: RoomPayload) => {
      console.log("roomCreated event received");
      console.log(room);
      setRoomName(room.room);
      setParticipants(room.participants);
      setPlayerCards({}); // Initialize player cards when the room is created
      setPlayerHandLength({}); // Initialize player hand length when the room is created
    });

    socket.on("onTurnUpdate", (room: turnPayload) => {
      console.log("Turn updated:", room.turn);
      console.log(room);
    
      if (typeof room.playerHandLength === 'object' && room.playerHandLength !== null) {
        console.log("Received player hand length:", room.playerHandLength);
        setPlayerHandLength(room.playerHandLength);
      } else {
        console.error("Invalid player hand length data received:", room.playerHandLength);
        console.error("Type:", typeof room.playerHandLength);
      }
    
      setTurn(room.turn);
      console.log("Player hand length:", { playerHandLength });
    });

    socket.on('onRoomJoined', (room: RoomPayload) => {
        console.log('roomJoined event received');
        console.log(room);
        setRoomName(room.room);
        setParticipants(room.participants);
        setPlayerCards(room.playerCards || {}); // Ensure playerCards is initialized
    });

    socket.on("onParticipantUpdate", (room: RoomPayload) => {
      console.log("updateParticipants event received");
      console.log(room);
      setParticipants(room.participants);
    });

    socket.on("onRoomJoinFailed", (room: RoomPayload) => {
      console.log("roomJoinFailed event received");
      console.log(room);
      setError(room.msg);
    });

    socket.on("onCardsDistributed", (cards: cardsPayload) => {
        console.log("cardsDistributed event received");
        console.log(cards);
        setPlayerCards((prev) => ({ ...prev, [socket.id]: cards.cards }));
    });

    socket.on("onGameEnd", (game: gamePayload) => {
      console.log("gameEnd event received");
      console.log(game);
      alert(`Game has ended. Winner: ${game.winner}`);
      setRoomName("");
      setParticipants([]);
      setPlayerCards({});
      setPile([]);
      setTurn("");
    });

    socket.on("onCardPlayed", (cards: playCardPayload) => {
      console.log("onCardPlayed event received");
      console.log(cards);
      // Add the card to the pile
      setPile((prev) => [...prev, cards.card]);
      if (cards.playerId === socket.id) {
        setPlayerCards((prev) => ({ ...prev, [cards.playerId]: prev[cards.playerId].filter((card) => card.id !== cards.card.id) }));
      }
    });

    socket.on('onCardDrawn', (drawnCard: Card) => {
      console.log('onCardDrawn event received');
      console.log(drawnCard);
  
      // Update the player's hand and pile
      setPlayerCards((prev) => ({ ...prev, [socket.id]: [...prev[socket.id], drawnCard] }));
    });

    socket.on('onCardsDrawn', (cards: cardsPayload) => {
      console.log('onCardsDrawn event received');
      console.log(cards);
  
      // Update the player's hand and pile
      setPlayerCards((prev) => ({ ...prev, [socket.id]: [...prev[socket.id], ...cards.cards] }));
    });

    socket.on("onGameStart", (pile: cardsPayload) => {
      console.log("gameStart event received");
      console.log(pile);
      setPile(pile.cards);
      setPlayerHandLength(pile.playerHandLength);
      setGameStarted(true);
    });    

    return () => {
      console.log("disconnecting");
      socket.off("connect");
      socket.off("onMessage");
      socket.off("onRoomCreated");
      socket.off("onRoomJoined");
      socket.off("onParticipantUpdate");
      socket.off("onRoomJoinFailed");
      socket.off("onCardsDistributed");
      socket.off("onCardPlayed");
      socket.off("onGameStart");
      socket.off("onCardDrawn");
      socket.off("onCardsDrawn");
      socket.off("disconnect");
    };
  }, [socket]);

  const onCreateRoom = () => {
    socket.emit("createRoom");
  };

  const onJoinRoom = () => {
    socket.emit("joinRoom", roomValue);
    setRoomValue("");
  };

  const playCard = (card: Card) => {
    console.log("Sending playCard event to the server");
    console.log("Pile before emitting playCard:", pile);
    socket.emit('playCard', { card, room: roomName, lastCard: pile[pile.length - 1], playerHand: playerCards[socket.id] });
  };  

  const handleStartGame = () => {
    socket.emit("startGame", { roomName: roomName }); // Send startGame event with roomName in payload
  };

  const handleLeaveRoom = () => {
    socket.emit("leaveRoom");
    // refresh the page
    window.location.reload();
  }

  const handleDraw = () => {
    console.log("Sending drawCard event to the server");
    socket.emit('drawCard', { room: roomName, playerId: socket.id });
  };

  return (
    <div>
      <div>
        <h1>Websocket component</h1>
        <div>
          {error !== "" ? (
            <div>{error}</div>
          ) : (
            <div>
              Participants in room: {
                participants.map((participant) => (
                  <div key={participant}>{participant} - {gameStarted && playerHandLength[participant]} cards</div>
                ))
              } {participants.length}/4
              {turn && <div>Turn: {turn}</div>}
              {turn === socket.id && <div><b>It's your turn to play!</b></div>}
              {pile.length > 0 && (
                <div>
                  Pile: {pile.length}
                  {pile.map((card, index) => (
                    <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px', backgroundColor: card.color }}>
                        {card.value}
                    </div>
                  ))}
                  <button onClick={handleDraw}>Draw</button>
                </div>
              )}
              {playerCards[socket.id] && (
                  <div>
                      Your Cards: 
                      {playerCards[socket.id].map((card, index) => (
                          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px', backgroundColor: card.color }}>
                              {card.value}
                              {['Wild', 'Wild Draw Four'].includes(card.value) && ['red', 'green', 'blue', 'yellow'].map(color => (
                                  <button key={color} onClick={() => {card.color = color; playCard(card);}}>{color}</button>
                              ))}
                              {/* If not wild, show play button */}
                              {!['Wild', 'Wild Draw Four'].includes(card.value) &&
                              <button onClick={() => playCard(card)}>Play</button>
                              }
                          </div>
                      ))}
                  </div>
              )}
              {Object.keys(playerCards).map((player) => (
                <div key={player}>
                  {player !== socket.id && (
                    <div>
                      {player}'s Cards: {playerCards[player].length}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {messages.length === 0 ? (
            <div>No messages</div>
          ) : (
            <div>
              {messages.map((message, index) => (
                <div key={index} style={message.clientId === "SERVER" ? { color: "gray", fontStyle: "italic" } : {}}>
                  [{message.clientId}] {message.content.text}
                </div>
              ))}
            </div>
          )}
        </div>
        {roomName === "" ? (
          <div>
            <button onClick={onCreateRoom}>Create room</button>
            <div>
              <input type="text" value={roomValue} onChange={(e) => setRoomValue(e.target.value)} />
              <button onClick={onJoinRoom}>Join room</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={handleLeaveRoom}>Leave room</button>
          </div>
        )}
        <div>
          {!gameStarted && participants.length > 3 && (
            <button onClick={handleStartGame}>Start Game</button>
          )}
        </div>
        {roomName === "" ? (
          <div>No room joined</div>
        ) : (
          <div>
            <div>Room name: {roomName}</div>
          </div>
        )}
      </div>
    </div>
  );
};
