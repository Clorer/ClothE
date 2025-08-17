import DATA from "../assets/cloth.data.js";
import { CardWithCloth } from "./CardWithCloth.jsx";

export function NewThisWeek() {
  return (
    <div className=" ml-10 mt-16 mr-10 flex flex-col justify-between ">
      <div className="text-5xl font-black leading-8">
        <h1>NEW</h1>
        <h1>THIS WEEK</h1>
      </div>
      <div className="mt-5 flex justify-between">
        {(DATA ?? []).slice(2).map((cloth, idx) => (
          <CardWithCloth
            key={cloth?.id ?? `cloth-${idx}`}
            DATA={cloth}
          />
        ))}
      </div>
    </div>
  );
}
