import Arrow from "../assets/Arrow.svg";

export function NewCollectionCard() {
  return (
    <div className="flex flex-col justify-between h-[21.5rem] w-[21.5rem] ">
      <div className="flex gap-5 flex-col">
        <div className="text-5xl font-black leading-8">
          <h1>NEW</h1>
          <h1>COLLECTION</h1>
        </div>
        <div className="text-lg leading-5">
          <h4>Summer</h4>
          <h4>2024</h4>
        </div>
      </div>
      <div className="bg-gray-300 mt-5 h-[6vh] py-2 flex items-center justify-between px-4 border">
        <button className="text-sm font-medium">Go to store</button>
        <img src={Arrow} alt="Arrow" className="w-5 h-5" />
      </div>
    </div>
  );
}
