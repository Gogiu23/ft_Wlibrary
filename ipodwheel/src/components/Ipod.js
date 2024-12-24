import "./ipod.css";
import Screen from "./Screen";
import Wheel from "./Wheel";

const Ipod = () => {
  return (
    <div className="ipod">
      <Screen />
      <Wheel />
    </div>
  );
};

export default Ipod;
