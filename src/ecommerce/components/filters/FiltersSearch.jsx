import React, { useContext, useId } from "react";
import { SearchContext } from "../../context/SearchProvider";

export const FiltersSearch = () => {

    const inputRangeMinPrice = useId();

    const {search, minPrice, setSearch} = useContext(SearchContext);

    const onInputChange = ({target})=>{
        const {name, value, type} = target;
       if(type === 'range'){
        setSearch((prevState)=>({...prevState, [name]:value}));
       }else if(type == 'text'){
        setSearch((prevState)=>({...prevState, [name]:value}));
       }
    }

  return (
    <form action="">
      <div className="search-input">
        <input
          type="text"
          name="searchText"
          id=""
          placeholder="Laptop, Smartphones, Tablets..."
          onChange={onInputChange}
        />
        <button>Search</button>
      </div>

      <div className="filters">
        <small>Min Price:</small>
        <input type="range" name="minPrice" id={inputRangeMinPrice} value={search.minPrice} min={0} max={2000
        }
        onChange={onInputChange}
        />
        <label htmlFor={inputRangeMinPrice}>
            {search.minPrice}
        </label>
      </div>
    </form>
  );
};
