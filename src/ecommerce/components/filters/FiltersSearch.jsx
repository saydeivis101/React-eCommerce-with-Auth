import React, { useContext, useId } from "react";
import { SearchContext } from "../../context/SearchProvider";

export const FiltersSearch = () => {
  const inputRangeMinPrice = useId();

  const { search, minPrice, categories, setSearch } = useContext(SearchContext);

  const onInputChange = ({ target }) => {
    const { name, value, type } = target;
    if (type === "range") {
      setSearch((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setSearch((prevState) => ({ ...prevState, [name]: value }));
    }
  };

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
        <div className="minPrice">
          <small>Min Price:</small>
          <input
            type="range"
            name="minPrice"
            id={inputRangeMinPrice}
            value={search.minPrice}
            min={0}
            max={2000}
            onChange={onInputChange}
          />
          <div className="label-min-price">
            <label htmlFor={inputRangeMinPrice}>{search.minPrice}</label>
          </div>
        </div>

        <div className="select">
          <select name="category" id="" onChange={onInputChange}>
            {categories &&
              categories.map((category, index) => (
                <option key={`${category}_${index}`} value={category}>
                  {category[0].toUpperCase() +
                    category.substring(1, category.length)}
                </option>
              ))}
          </select>
        </div>
      </div>
    </form>
  );
};
