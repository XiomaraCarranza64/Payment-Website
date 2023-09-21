import { useState } from "react";
import profile from "../../img/profile.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [cli, setCli] = useState(false);

  return (
    <div className="flex flex-row md:flex-row justify-between items-center h-1/4 py-12 mx-10  ">
      <div className="flex invisible w-full justify-center md:visible md:gap-24">
        <h1>Home</h1>
        <h1>Shop</h1>
        <h1>Contact</h1>
        <h1>Help</h1>
      </div>
      <div className= "flex gap-3  items-center font-primary">
          <h1 className="font-semibold">Xiomara</h1>
          <img src={profile} className="w-10 h-10 rounded-full " />
      </div>
    </div>
  );
};

export default Navbar;
