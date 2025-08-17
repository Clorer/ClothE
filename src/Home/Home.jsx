import Header from "../Header/Header";
import { NewCollectionCard } from "./NewCollectionCard";
import { SearchLine } from "./SearchLine";
import DATA from "../assets/cloth.data";
import { NewThisWeek } from "./NewThisWeek";
import { Prefooter } from "./Footer";
import { CardWithCloth } from "./CardWithCloth";

function Home() {
  return (
    <>
      <Header />
      <SearchLine />
      <div className="flex justify-between ml-10 mt-16 mr-10">
        <NewCollectionCard />
        {(DATA ?? [])
            .slice(0, 2)
            .map((cloth, idx) => (
              <CardWithCloth key={cloth?.id ?? `cloth_${idx}`} DATA={cloth} />
            ))}
      </div>
      <NewThisWeek />
      <Prefooter />
    </>
  );
}
export default Home;
