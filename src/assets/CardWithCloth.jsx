export function CardWithCloth({DATA}){
    return(
        <div className="flex flex-col justify-between h-[21.5rem]">
            <img className=" h-[20rem] w-[20rem]" src={DATA.photo} alt="Cloth Photo" />
            <div className="flex gap-4">
                <h1 className="text-xs">{DATA.material}</h1>
                <div className="border h-3 w-3" style={{backgroundColor: DATA.color}}></div>
            </div>
            <div className="flex justify-between text-sm">
                <h1>{DATA.name}</h1>
                <h1>{DATA.price}</h1>
            </div>
        </div>
    )
}