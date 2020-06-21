import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core';
import { Product } from '../index'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // padding: 30
  },
});

const ProductList = ({ products, updateCart }) => {
  const classes = useStyles()

  return (
    <Grid container justify='center' alignContent='center' className={classes.root} spacing={2}>
        {
          products.map(item =>
            <Grid item xs={12} sm={12} md={6} lg={3} key={item.id}>
              <Product
                product={item}
                updateCart={updateCart}
              />
            </Grid>
          )
        }
    </Grid>
  )
}

ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array,
  updateCart: PropTypes.func
}

export default ProductList
