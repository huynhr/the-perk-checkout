import React, { useEffect, useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import './App.css'
import { MenuBar } from './components/index'
import { Cart, Home, OrderCompleted } from './pages/index'

/**
 * Task:
 * 1-[DONE] Create a home page that will display all the items and their price 
 * 2-[DONE] Allow add to cart functionality
 * 3-[DONE] Show cart status (# of items and total price)
 * 4-[DONE] Show items in cart
 * 5-[DONE] enter shipping, billing & credit card information
 * 6-[DONE] review items page
 * 7-[DONE] submit everything
 * 8- Make it look pretty
 * 9- Allow to remove items from cart
 * 10- Talk about recent project
 */

const useStyles = makeStyles({
  root: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: 30
  }
});

function App() {
  const classes = useStyles()
  const [products, updateProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [cart, updateCart] = useState([])
  const [cartTotal, updateCartTotal] = useState(0)
  const [shippingDetails, updateShippingDetails] = useState({})

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
      updateProducts(productsWithPrices)
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
      <div className={classes.root}>
        <Switch>
          <Route path='/cart'>
            <Cart
              cartItems={cart}
              updateCart={updateCart}
              cartTotal={cartTotal}
              shippingDetails={shippingDetails}
              updateShippingDetails={updateShippingDetails}
            />
          </Route>
          <Route path='/orderCompleted'><OrderCompleted /></Route>
          <Route path='/'>
            <Home
              products={products}
              updateCart={updateCart}
              isLoading={isLoading}      
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
