import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Button,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MenuBar = ({ cart, cartTotal }) => {

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          The Perk Check Out
        </Typography>
        <Button color="inherit">Login</Button>
        <Typography>
          {cartTotal}
        </Typography>
        <Link to='/cart'>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

MenuBar.propTypes = {
  cart: PropTypes.array,
  cartTotal: PropTypes.number
}

export default MenuBar
