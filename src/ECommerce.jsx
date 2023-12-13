import React from 'react'
import { FiltersSearch } from './ecommerce/components/filters/FiltersSearch'

import './main.css'
import './app.css'
import { ProductsGrid } from './ecommerce/components/productsGrid/ProductsGrid'
import { CartDisplay } from './ecommerce/components/cartDisplay/CartDisplay'

export const ECommerce = () => {
  return (
   
    <div className="container">
       
    <header className='hero'>
      <h1>ECommerce</h1>
      <CartDisplay/>
      <FiltersSearch/>
    </header>


    <main>
      <ProductsGrid/>
    </main>
    </div>
  )
}
