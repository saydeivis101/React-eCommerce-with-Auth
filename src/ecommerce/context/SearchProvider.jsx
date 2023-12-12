import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState({
        searchText: '',
        category: 'all',
        minPrice: 0,
        products: [],
    })

  return (
    <SearchContext.Provider value={{
        search,
        minPrice: search.minPrice,
        setSearch,
    }}>
        {children}
    </SearchContext.Provider>
  )
}
