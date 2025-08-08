export function ButtonPage({ page, selectedPage, setSelectedPage}) {
  return (
    <button
      id={page}
      onClick={() => {
        console.log(page, selectedPage);
        setSelectedPage(page);
        console.log(page, selectedPage);
      }}
      className={` ${
        page === selectedPage ? "border-b-2" : "hover:opacity-60"
      } text-lg`}
    >
      {page}
    </button>
  );
}
