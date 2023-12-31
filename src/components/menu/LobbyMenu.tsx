import { Menu } from "./Menu";
import '../../assets/styles/button.scss'

interface Props {}

export const LobbyMenu: React.FC<Props> = () => (
  <Menu children={
    <div className="flex gap-[5px] p-[10px] h-full">
      <div className="flex flex-col flex-1">
        <h3 className="m-[10px] font-bold text-center text-[20px]">LOBBY</h3>
        <div className="flex-1 bg-grey"></div>
      </div>
      <div className="flex flex-col flex-1 pt-[35px]">
        <button className="button bg-orange text-[20px]">INVITER</button>
        <button className="button bg-orange text-[20px]">PARAMETRES</button>
        <button className="button bg-orange text-[20px] mt-[95px] sm:mt-[215px] md:mt-[195px] xl:mt-[145px]">JOUER</button>
      </div>
    </div>
  }/>
);
