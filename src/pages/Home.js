import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ProductList } from '../components/index'

const Home = ({ products, updateCart, isLoading }) => {
  return isLoading ? <CircularProgress />: (
    <ProductList
      products={products}
      updateCart={updateCart}
    />
  )
}

Home.propTypes = {
  products: PropTypes.array,
  updateCart: PropTypes.func,
  isLoading: PropTypes.bool
}

export default Home
