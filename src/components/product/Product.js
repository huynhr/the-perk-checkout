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
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    marginBottom: 20
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
        <Typography>{`$${price}`}</Typography>
        <Button size="small" color="primary" onClick={() => handleAddClick(product)}>
          Add To Cart
        </Button>
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
