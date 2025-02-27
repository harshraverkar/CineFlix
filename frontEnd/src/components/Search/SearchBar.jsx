import React from "react";
import { useGlobalContext } from "./context";

import "./search.css";

const SearchBar = () => {
   const { query, setQuery, isError  } = useGlobalContext();
   return (
  <>
   <section className="search-section">
      <b>Search your favorite movie</b>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
            <input type="text" placeholder="search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    </form>
    <div className="card-error">
        <p>{isError.show && isError.msg}</p>
    </div>
   </section>
   ;
   </>
   );
};

export default SearchBar;