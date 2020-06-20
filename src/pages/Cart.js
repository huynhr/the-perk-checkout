import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Stepper, Step, StepLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { CartOverview, ReviewOrder, ShippingDetails } from '../components/index'

const useStyles = makeStyles({
  root: {
  },
  section: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: 30
  }
});

const Cart = ({
  cartItems,
  cartTotal,
  updateShippingDetails,
  shippingDetails,
  updateCart
}) => {
  let history = useHistory();
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = [
    { name: 'Shopping Cart' },
    { name: 'Shipping Details' },
    { name: 'Review your Order' },
  ]

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      fetch('https://jsonplaceholder.typicode.com/photos/order', {
        method: 'POST',
        body: JSON.stringify({ order: cartItems, paymentInfo: shippingDetails})
      })
        .then(data => {
          updateCart([])
          updateShippingDetails({})
          history.push('orderCompleted')
        })
        .catch(error => {
          updateCart([])
          updateShippingDetails({})
          history.push('orderCompleted')
        })
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div>
      {
        cartItems.length && (
          <div className={classes.section}>
            <Stepper activeStep={activeStep}>
              {steps.map((item, index) => {
                return (
                  <Step key={item.name}>
                    <StepLabel>{item.name}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
            {activeStep === 0 &&
              <CartOverview cartItems={cartItems} cartTotal={cartTotal} />
            }

            {activeStep === 1 &&
              <ShippingDetails
                cartItems={cartItems}
                cartTotal={cartTotal}
                shippingDetails={shippingDetails}
                updateShippingDetails={updateShippingDetails}
              />
            }

            {activeStep === 2 &&
              <ReviewOrder
                cartItems={cartItems}
                cartTotal={cartTotal}
                shippingDetails={shippingDetails}
              />
            }
            <Button disabled={activeStep === 0} variant='contained' color='secondary' onClick={handleBack}>
              Back
            </Button>
            <Button variant='contained' color='primary' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Place your order' : 'Next'}
            </Button>
          </div>
        )
      }
    </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number,
  shippingDetails: PropTypes.object,
  updateShippingDetails: PropTypes.func,
  updateCart: PropTypes.func
}

export default Cart
