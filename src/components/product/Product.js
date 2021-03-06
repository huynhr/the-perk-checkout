import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { Money } from '../index'

const useStyles = makeStyles({
  root: {
    height: '100%',
    marginBottom: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: 140,
  },
});

const Product = ({ product, updateCart }) => {
  const { title, thumbnailUrl, price } = product
  const classes = useStyles()

  const handleAddClick = (product) => {
    updateCart((prevState) => ([
      ...prevState,
      product
    ]))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnailUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify='space-between'>
          <Grid item xs={6}>
            <Money price={price}/>
          </Grid>
          <Grid item xs={6}>
            <Button size="small" color="primary" variant='contained' onClick={() => handleAddClick(product)}>
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    price: PropTypes.number,
  }),
  id: PropTypes.number
}

export default Product
