import Icon from "../assets/Icon.png";
import SavedIcon from "../assets/SavedIcon.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import { useState } from "react";
import { ButtonPage } from "./ButtonPage";

function Header({activePage}) {
  const [selectedPage, setSelectedPage] = useState("Home");
  const pages = ["Home", "Products", "New"];
  return (
    <div className="font- flex justify-between sticky top-0 z-1 bg-gray-100 bg-opacity-40 py-5 shadow-md">
      <div className="ml-10 flex gap-9">
        {pages.map((page) => (
          <ButtonPage page={page} key={`${page}Key`} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
      <div className="">
        <img src={Icon} className="w-13 h-13" alt="Icon" />
      </div>
      <div className="flex gap-10 mr-10">
        <button>
          <img
            className="rounded-full mt-1 p-2 w-9 h-9 bg-black hover:opacity-70"
            src={SavedIcon}
            alt="SavedIcon"
          />
        </button>
        <div className="flex">
          <button className="px-3 rounded-3xl bg-black text-white p-2 hover:opacity-70">
            Cart
          </button>
        </div>
        <button>
          <img
            className="rounded-full mt-1 p-2 w-9 h-9 bg-black hover:opacity-70"
            src={ProfileIcon}
            alt="ProfileIcon"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
