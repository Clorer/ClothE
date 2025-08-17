import { Link } from 'react-router-dom';

export function CardWithCloth({ DATA }) {
  if (!DATA) return null;
  return (
    <Link
      to="/cloth"
      state={{ clothdata: DATA }}
      className="flex flex-col justify-between h-[21.5rem]"
    >
      <img
        className="h-[20rem] w-[20rem] object-cover"
        src={DATA.photo ?? DATA.photoOnModel}
        alt="Cloth Photo"
      />
      <div className="flex gap-4 mt-1">
        <h1 className="text-xs">{DATA.material}</h1>
        <div className="border h-3 w-3" style={{ backgroundColor: DATA.color }} />
      </div>
      <div className="flex justify-between text-sm">
        <h1>{DATA.name}</h1>
        <h1>{DATA.price}</h1>
      </div>
    </Link>
  );
}
