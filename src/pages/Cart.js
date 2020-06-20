import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    // width: '100%',
    margin: '0 auto',
    padding: 30
  }
});

const Cart = (props) => {
  const classes = useStyles()
  console.log(props.cart)
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant='h5'>Shopping Cart</Typography>
      </Grid>
    </Grid>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number
}

export default Cart
