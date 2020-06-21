import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Money } from '../index'

const useStyles = makeStyles({
  link: {
    color: '#FFF',
    textDecoration: 'none'
  },
  shoppingIcon: {
    color: '#FFF'
  }
})

const MenuBar = ({ cart, cartTotal }) => {
  const classes = useStyles()
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={6}>
            <Link to='/' className={classes.link}>
              <Typography variant="h6">
                  The Perk Check Out
              </Typography>
            </Link>
          </Grid>
          <Grid item={6}>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <Money price={cartTotal} />
              </Grid>
              <Grid item>
                <Link to='/cart' className={classes.shoppingIcon}>
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
