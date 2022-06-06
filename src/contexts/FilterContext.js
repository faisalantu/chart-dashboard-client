import React, { createContext, useState } from "react";
export const FilterContext = createContext();

function FilterContextProvider(props) {
  const [filterState, setFilterState] = useState({
    end_year: false,
    topic: false,
    sector: false,
    region: false,
    pestle: false,
    source: false,
    country: false,
    impact: false,
  })
  return (
    <FilterContext.Provider value={{ filterState, setFilterState }}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;