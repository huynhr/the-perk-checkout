import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, TextField, Paper } from '@material-ui/core'

const ReviewOrder = ({cartItems, cartTotal, shippingDetails}) => {
  return (
    <Grid container spacing={6}>
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
      <Grid item xs={12}>
        {
          Object.keys(shippingDetails).length && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                name='name'
                label='Name'
                variant='outlined'
                fullWidth
                value={shippingDetails.name}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='address'
                label="Address"
                variant="outlined"
                fullWidth
                value={shippingDetails.address}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='creditCard'
                label="Credit Card"
                variant="outlined"
                fullWidth
                value={shippingDetails.creditCard}
                disabled
              />
            </Grid>

            </Grid>
          )
        }
      </Grid>
      {!!cartItems.length && (
        <Grid item xs={12}>
          <Typography>{`Total $${cartTotal} for ${cartItems.length}`}</Typography>
        </Grid>
      )}
    </Grid>
  )
}

ReviewOrder.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number,
  shippingDetails: PropTypes.object,
}

export default ReviewOrder
