import Header from "../Header/Header";
import { NewCollectionCard } from "./NewCollectionCard";
import { SearchLine } from "./SearchLine";
import DATA from "../assets/cloth.data"
import { NewThisWeek } from "./NewThisWeek/NewThisWeek";

function Home() {
  return (
    <div>
      <Header />
      <SearchLine />
      <div className="flex justify-between ml-10 mt-16 mr-10">
          <NewCollectionCard />
          {DATA.slice(0,2).map((cloth) => (
            <img src={cloth.photoOnModel} alt="photo" className="h-[22.5rem]"/>
          ))}
      </div>
      <NewThisWeek />
    </div>
  );
}
export default Home;
