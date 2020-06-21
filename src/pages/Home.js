import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ProductList } from '../components/index'

const Home = ({ products, updateCart, isLoading }) => {
  const [currentProducts, updateCurrentProducts] = useState([])
  const [pageNumber, updatePageNumber] = useState(1)
  const [totalPages, updateTotalPages] = useState(0)

  useEffect(() => {
    const totalNumProd = products.length
    updateTotalPages(Math.ceil(totalNumProd/10))
    updateCurrentProducts(products.slice((pageNumber - 1) * 10, pageNumber * 10))
  }, [products, pageNumber])

  const handlePagination = (pageNum) => {
    updatePageNumber(() => pageNum)
  }

  return isLoading ? <CircularProgress />: (
    <Grid container justify='center' spacing={6}>
      <Grid item>
        <ProductList
          products={currentProducts}
          updateCart={updateCart}
        />
      </Grid>
      <Grid item>
        <Pagination count={totalPages} color='primary' onChange={(e, pageNum) => handlePagination(pageNum)} />
      </Grid>
    </Grid>
  )
}

Home.propTypes = {
  products: PropTypes.array,
  updateCart: PropTypes.func,
  isLoading: PropTypes.bool
}

export default Home
