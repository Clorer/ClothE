import { useNavigate } from "react-router-dom";
export function ButtonPage({ page, selectedPage, setSelectedPage}) {
  const navigate = useNavigate();
  return (
    <button
      id={page}
      onClick={() => {
        setSelectedPage(page);
        if (page === "Home") {
          navigate("/", { replace: true });
        }
      }}
      className={` ${
        page === selectedPage ? "border-b-2" : "hover:opacity-60"
      } text-lg`}
    >
      {page}
    </button>
  );
}
