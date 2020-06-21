import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Paper } from '@material-ui/core'
import { Money } from '../index'

const CartOverview = ({ cartItems, cartTotal }) => {
  return (
    <Grid container spacing={2}>
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
        <Grid item xs={12}>
          <Typography>{`Total $${cartTotal} for ${cartItems.length}`}</Typography>
        </Grid>
      )}
    </Grid>
  )
}

CartOverview.propTypes = {

}

export default CartOverview
