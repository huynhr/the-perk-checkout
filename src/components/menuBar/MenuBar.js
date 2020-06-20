import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MenuBar = ({ cart, cartTotal }) => {

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify='space-between'>
          <Grid item xs={6}>
            <Link to='/'>
              <Typography variant="h6">
                  The Perk Check Out
              </Typography>
            </Link>
          </Grid>
          <Grid item={6}>
            <Grid container>
              <Grid item>
                <Typography>
                  {cartTotal !== 0 && `$${cartTotal}`}
                </Typography>
              </Grid>
              <Grid item>
                <Link to='/cart'>
                  <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

MenuBar.propTypes = {
  cart: PropTypes.array,
  cartTotal: PropTypes.number
}

export default MenuBar
