import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: 0
  }
});

const Money = ({price}) => {
  const classes = useStyles()
  return (
    <Grid container alignItems='center'>
      <Grid item>
        <AttachMoneyIcon />
      </Grid>
      <Grid item>
        <Typography variant='h5' className={classes.root}>{`${price}`}</Typography>
      </Grid>
    </Grid>
  )
}

Money.propTypes = {
  price: PropTypes.number.isRequired
}

export default Money
