import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const Articlecard = ({art}) => {
  return (
    <Card sx={{ maxWidth: 'auto',margin: 1 }} >
      <CardMedia
        sx={{ height: 160 }}
        image={art.imageart}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {art.reference}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {art.designation.substring(0,20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <strong> Prix : {art.prix} DT </strong>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>

      <IconButton disabled={art.qtestock<=1} color="primary" aria-label="add to shopping cart">

      {art.qtestock<=1?   <AddShoppingCartIcon disabled />:   <AddShoppingCartIcon />}

</IconButton>

      
      </CardActions>
    </Card>
  )
}

export default Articlecard
