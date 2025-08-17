import Header from "../Header/Header";
import { useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
export function ClothPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [activeSize, setActiveSize] = useState(3);
  const clothdata = location.state?.clothdata;
  const clothPhotos = [
    clothdata?.photo ?? clothdata?.photoOnModel,
    clothdata?.photo_2 ?? clothdata?.photo ?? clothdata?.photoOnModel,
    clothdata?.photo_2 ?? clothdata?.photo ?? clothdata?.photoOnModel,
    clothdata?.photo_2 ?? clothdata?.photo ?? clothdata?.photoOnModel,
    clothdata?.photo_2 ?? clothdata?.photo ?? clothdata?.photoOnModel,
  ];
  return clothdata ? (
    <>
      <Header />
      <div className="flex justify-center mt-10 gap-5">
        <img
          className="h-[33rem] w-[28rem]  border-gray-300 border-2"
          src={clothPhotos[activeTab]}
          alt="Cloth Photo"
        />
        <div className="flex flex-col gap-2 mt-1">
          {(clothPhotos ?? []).map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              className={`border-gray-300 border-1 h-[6rem] w-[5.4rem] ${
                activeTab === idx ? "opcity-100" : "opacity-50"
              }`}
              alt={idx + 1}
              onClick={() => {
                setActiveTab(idx);
              }}
            />
          ))}
        </div>
        <div className="h-[33rem] w-[28rem] border-gray-300 border-2 flex justify-between flex-col gap-2 p-5 px-15 pt-20">
          <div className="">
            <h1 className="text-2xl font-bold">{clothdata.name}</h1>
            <h1 className="text-2xl font-bold">{clothdata.price}</h1>
            <h1 className="text-lg mt-3 opacity-80">MRP incl. of all taxes</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg opcity-80">Size</h1>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL", "2X"].map((size, idx) => (
                <button
                  key={idx}
                  className={` ${activeSize === idx ? "bg-gray-300" : ""} border px-3 py-1 h-[3rem] w-[3rem] hover:bg-gray-300`}
                  onClick={() => setActiveSize(idx)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="bg-gray-400 text-2xl mt-5 font-extrabold px-4 py-2">
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" replace />
  );
}
