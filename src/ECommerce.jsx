import React from 'react'
import { FiltersSearch } from './ecommerce/components/filters/FiltersSearch'

import './main.css'
import './app.css'
import { ProductsGrid } from './ecommerce/components/productsGrid/ProductsGrid'

export const ECommerce = () => {
  return (
   
    <div className="container">
       
    <header className='hero'>
      <h1>ECommerce</h1>
      <FiltersSearch/>
    </header>


    <main>
      <ProductsGrid/>
    </main>
    </div>
  )
}
