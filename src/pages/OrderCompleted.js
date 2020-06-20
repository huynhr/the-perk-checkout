import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const OrderCompleted = () => {
 return (
  <Grid container spacing={2} justify='center'>
    <Grid item xs={12}>
      <Typography align='center'>Order has been completed.</Typography>
    </Grid>
    <Grid item>
      <Link to='/'>
        <Button contained variant='primary'>
          Continue Shopping
        </Button>
      </Link>
    </Grid>
  </Grid>
 ) 
}

export default OrderCompleted
