import SearchIcon from "../assets/SearchIcon.svg";
export function SearchLine() {
  return (
    <>
      <div className="font-bold text-xl mt-15 ml-10">
        <h1>MEN</h1>
        <h1>WOMEN</h1>
        <h1>KIDS</h1>
        <div className="bg-gray-300 mt-5 w-[25vw] h-[6vh] border py-2 flex gap-2">
          <img
            className=" h-[3vh] ml-2"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input className="focus:outline-0 text-lg"/>
        </div>
      </div>
    </>
  );
}
