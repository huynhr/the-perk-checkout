import React, { useEffect, useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { MenuBar } from './components/index'
import { Cart, Home } from './pages/index'

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
  const [cartTotal, updateCartTotal] = useState(0)

  const getProducts = async () => {
    setIsLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    setIsLoading(false)
    return response.json()
  }

  const generatePrice = () => {
    return Math.ceil(Math.random() * 100)
  }

  useEffect(() => {
    getProducts().then(data => {
      const productsWithPrices = data.map(product => {
        product.price = generatePrice()
        return product
      })
      updateProducts(productsWithPrices.slice(0, 10))
    })
  }, [])

  const calculateTotal = (products) => {
    return products.reduce((sum, prod) => sum += prod.price, 0)
  }

  useEffect(() => {
    updateCartTotal(calculateTotal(cart))
  }, [cart])

  return (
    <Router>
      <MenuBar cart={cart} cartTotal={cartTotal} />
      <Switch>
        <Route path='/cart'>
          <Cart cart={cart} updateCart={updateCart} />
        </Route>
        <Route path='/'>
          <Home
            products={products}
            updateCart={updateCart}
            isLoading={isLoading}      
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
