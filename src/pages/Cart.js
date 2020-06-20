import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Paper, Button, Stepper, Step, StepLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { CartOverview } from '../components/index'

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    padding: 30
  }
});

const Cart = ({cartItems, cartTotal}) => {
  // const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = [
    { name: 'Shopping Cart' },
    { name: 'Shipping Details' },
    { name: 'Review your Order' },
  ]
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((item, index) => {
          return (
            <Step key={item.name}>
              <StepLabel>{item.name}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {activeStep === 0 &&
          <CartOverview cartItems={cartItems} cartTotal={cartTotal} />
        }
      </div>
    </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number
}

export default Cart
