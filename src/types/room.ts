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

type Card = {
    id: number;
    color: "red" | "blue" | "green" | "yellow";
    value: string;
    effect: string;
};

type cardsPayload = {
    cards: Card[],
};

type playCardPayload = {
    card: Card,
    playerId: string,
}