import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const CartOverview = ({ cartItems, cartTotal }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant='h5'>Shopping Cart</Typography>
      </Grid>
      {
        !!cartItems.length && cartItems.map(item => (
          <Grid item xs={12} key={item.id}>
            <Paper>
              <Grid container>
                <Grid item xs={6}>
                  <img src={item.thumbnailUrl} alt='product' />
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    {item.title}
                  </Typography>
                  <Typography>
                    {`$${item.price}`}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))
      }
      {!!cartItems.length && (
        <>
          <Grid item xs={12}>
            <Typography>{`Total $${cartTotal} for ${cartItems.length}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='primary'>
              <Link to='/'>
                <Typography>Continue to Checkout</Typography>
              </Link>
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  )
}

CartOverview.propTypes = {

}

export default CartOverview
