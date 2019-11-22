const Filter = ({ active, setFilter }) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center items-center bg-white py-3 font-nunito">
      <button
        onClick={() => setFilter("")}
        className={`rounded md:w-auto hover:bg-blue-100 hover:text-blue-500 py-2 px-4 text-gray-600 mx-1 w-1/3 ${active ===
          "" && "active"}`}
        type="button"
      >
        Todos
      </button>
      <button
        onClick={() => setFilter("aventura")}
        className={`rounded md:w-auto hover:bg-blue-100 hover:text-blue-500 py-2 px-4 text-gray-600 mx-1 w-1/3 ${active ===
          "aventura" && "active"}`}
        type="button"
      >
        Aventura
      </button>
      <button
        onClick={() => setFilter("arqueologia")}
        className={`rounded md:w-auto hover:bg-blue-100 hover:text-blue-500 py-2 px-4 text-gray-600 mx-1 w-1/3 ${active ===
          "arqueologia" && "active"}`}
        type="button"
      >
        Arqueología
      </button>
      <button
        onClick={() => setFilter("naturaleza")}
        className={`rounded md:w-auto hover:bg-blue-100 hover:text-blue-500 py-2 px-4 text-gray-600 mx-1 w-1/3 ${active ===
          "naturaleza" && "active"}`}
        type="button"
      >
        Naturaleza
      </button>
      <button
        onClick={() => setFilter("cultural")}
        className={`rounded md:w-auto hover:bg-blue-100 hover:text-blue-500 py-2 px-4 text-gray-600 mx-1 w-1/3 ${active ===
          "cultural" && "active"}`}
        type="button"
      >
        Cultural
      </button>
      <style jsx>{`
        .active {
          background-color: #38a169;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Filter;
