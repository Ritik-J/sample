import { useState } from "react";

const Search = ({ setmealData }) => {
  const [search, setsearch] = useState("");

  const searchData = async (e) => {
    e.preventDefault();
    const meal = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await meal.json();
    setmealData(data.meals);
  };
  return (
    <div>
      <nav className="navbar d-flex justify-content-center align-item-center">
        <form className="d-flex gap-2" onSubmit={searchData}>
          <input
            className="form-control mr-sm-2"
            style={{ width: "250px" }}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 "
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Search;
