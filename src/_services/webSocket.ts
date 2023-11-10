// import { useContext, useEffect, useState } from "react";

// import { WebsocketContext } from "../contexts/rooms/WebSocketsContext";

// const [error, setError] = useState("");
// const [turn, setTurn] = useState("");
// const [roomValue, setRoomValue] = useState("");
// const [participants, setParticipants] = useState<string[]>([]);
// const [roomName, setRoomName] = useState("");
// const [messages, setMessages] = useState<messagePayload[]>([]);
// const [playerCards, setPlayerCards] = useState<Record<string, Card[]>>({});
// const [pile, setPile] = useState<Card[]>([]);
// const socket = useContext(WebsocketContext);

// useEffect(() => {
//     socket.on("connect", () => {
//         console.log("connected");
//     });

//     socket.on("onMessage", (newMessage: messagePayload) => {
//         console.log("onMessage event received");
//         console.log(newMessage);
//         setMessages((prev) => [...prev, newMessage]);
//     });

//     socket.on("onRoomCreated", (room: RoomPayload) => {
//         console.log("roomCreated event received");
//         console.log(room);
//         setRoomName(room.room);
//         setParticipants(room.participants);
//         setPlayerCards({}); // Initialize player cards when the room is created
//     });

//     socket.on("onTurnUpdate", (room: RoomPayload) => {
//         console.log("Turn updated:", room.turn);
//         setTurn(room.turn);
//     });

//     socket.on('onRoomJoined', (room: RoomPayload) => {
//         console.log('roomJoined event received');
//         console.log(room);
//         setRoomName(room.room);
//         setParticipants(room.participants);
//         setPlayerCards(room.playerCards || {}); // Ensure playerCards is initialized
//     });

//     socket.on("onParticipantUpdate", (room: RoomPayload) => {
//         console.log("updateParticipants event received");
//         console.log(room);
//         setParticipants(room.participants);
//     });

//     socket.on("onRoomJoinFailed", (room: RoomPayload) => {
//         console.log("roomJoinFailed event received");
//         console.log(room);
//         setError(room.msg);
//     });

//     socket.on("onCardsDistributed", (cards: cardsPayload) => {
//         console.log("cardsDistributed event received");
//         console.log(cards);
//         setPlayerCards((prev) => ({ ...prev, [socket.id]: cards.cards }));
//     });

//     socket.on("onCardPlayed", (cards: playCardPayload) => {
//         console.log("onCardPlayed event received");
//         console.log(cards);
//         // Add the card to the pile
//         setPile((prev) => [...prev, cards.card]);
//         if (cards.playerId === socket.id) {
//             setPlayerCards((prev) => ({ ...prev, [cards.playerId]: prev[cards.playerId].filter((card) => card.id !== cards.card.id) }));
//         }
//     });

//     socket.on("onGameStart", (pile: cardsPayload) => {
//         console.log("gameStart event received");
//         console.log(pile);
//         setPile(pile.cards);
//     });    
// }, [socket]);