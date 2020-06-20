import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import { ProductList, MenuBar } from './components/index';

/**
 * Task:
 * 1- Create a home page that will display all the items and their price
 * 2- Allow add to cart functionality
 * 3- Show cart status (# of items and total price)
 * 4- Show items in cart
 * 5- enter shipping, billing & credit card information
 * 6- review items page
 * 7- submit everything
 */

function App() {
  const [products, updateProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [cart, updateCart] = useState([])

  const getProducts = async () => {
    setIsLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    setIsLoading(false)
    return response.json()
  }

  useEffect(() => {
    getProducts().then(data => updateProducts(data.slice(0, 10)))
  }, [])

  console.log(cart)
  return (
    <div className='App'>
      <MenuBar cart={cart} />
      {
        isLoading ? <CircularProgress />: <ProductList products={products} updateCart={updateCart} />
      }
    </div>
  );
}

export default App;
