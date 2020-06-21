import React from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField } from '@material-ui/core'

const ShippingDetails = ({ shippingDetails, updateShippingDetails }) => {

  const handleChange = (e) => {
    const {name, value} = e.target
    updateShippingDetails((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            name='name'
            label='Name'
            variant='outlined'
            fullWidth
            value={shippingDetails.name}
            onChange={e => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            name='address'
            label="Address"
            variant="outlined"
            fullWidth
            onChange={e => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='creditCard'
            label="Credit Card"
            variant="outlined"
            fullWidth
            onChange={e => handleChange(e)}
          />
        </Grid>
      </Grid>
    </form>
  )
}

ShippingDetails.propTypes = {
  shippingDetails: PropTypes.object,
  updateShippingDetails: PropTypes.func
}

export default ShippingDetails
