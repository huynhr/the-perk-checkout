import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Button,
  Toolbar,
  Typography
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MenuBar = ({ cart }) => {
  const [cartTotal, updateCartTotal] = useState(0)

  const calculateTotal = (products) => {
    return products.reduce((sum, prod) => sum += prod.price, 0)
  }

  useEffect(() => {
    updateCartTotal(calculateTotal(cart))
  }, [cart])

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          The Perk Check Out
        </Typography>
        <Button color="inherit">Login</Button>
        <Typography>
          {cartTotal}
        </Typography>
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

MenuBar.propTypes = {
  cart: PropTypes.array
}

export default MenuBar
