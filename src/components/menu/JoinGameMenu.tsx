import { Link } from "react-router-dom";
import { socket } from "../../contexts/rooms/WebSocketsContext";

export default function JoinGameMenu() {


    return (
        <div className="flex flex-col items-center">
          <Link to={"/"}
            className=" w-[500px] h-[100px] bg-gradient-to-b from-yellow-500 to-amber-200 uppercase text-3xl m-5 cursor-pointer rounded-lg hover:bg-gradient-to-r"
            onClick={() => 
                socket.emit("createRoom")
              }
          >
            Créer une partie
          </Link>
          <button
            className=" w-[500px] h-[100px] bg-gradient-to-b from-yellow-500 to-amber-200 uppercase text-3xl m-5 cursor-pointer rounded-lg hover:bg-gradient-to-r"
            onClick={() => {}}
          >
            Rejoindre une partie
          </button>
        </div>

    )
}