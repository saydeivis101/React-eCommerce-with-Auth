import React, { createContext, useState } from 'react'
import {products} from '../mocks/products.json';

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const formatedProducts = products.slice(0,10).map((product)=>(
      {
        id: product.id,
        image: product.thumbnail,
        title: product.title,
        price: product.price,
        category: product.category,
      }
    ))

    const originalCategory = new Set();
    originalCategory.add('all');
    
    formatedProducts.forEach(product => {(
      originalCategory.add(product.category, product.id)
    )});

    const [search, setSearch] = useState({
        searchText: '',
        category: 'all',
        minPrice: 0,
        products: formatedProducts,
        categories: [...originalCategory],
    })

    const filterProducts = (products)=>{
      return products.filter((product)=>(
        (product.price >= search.minPrice) && (search.category === 'all' || product.category === search.category)
      ))
  }

  const filtedProducts = filterProducts(formatedProducts);

  return (
    <SearchContext.Provider value={{
        search,
        minPrice: search.minPrice,
        products: filtedProducts,
        categories: search.categories,
        setSearch,
    }}>
        {children}
    </SearchContext.Provider>
  )
}
