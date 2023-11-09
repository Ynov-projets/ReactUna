import { Menu } from "./Menu";

interface Props {}

export const LobbyMenu: React.FC<Props> = () => (
  <Menu children={
    <div>
      <div>
        LOBBY
        <div></div>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  }/>
);
