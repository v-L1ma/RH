import { FunctionComponent } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";

const SideBar: FunctionComponent = () => {
  return (
    <div>
    <nav className="bg-blue-600 flex flex-col h-screen p-3 absolute z-10 hover:w-3/6">
      <ul className="text-white flex flex-col items-start gap-3">
        <li className="text-2xl flex overflow-hidden cursor-pointer"><FaStopwatch /></li>
        <li className="text-2xl flex overflow-hidden pl-1 cursor-pointer"><FaUserCheck /></li>
      </ul>
    </nav>
    </div>
  );
};

export default SideBar;
