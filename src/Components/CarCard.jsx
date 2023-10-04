import React from 'react';
import { Card, CardContent, CardActions, Button, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import carImage from '../assets/carImage.png' ; 

const CarCard = ({ car }) => {
  return (
    <Card className="car-card">
      <img src={carImage} alt={car.name} className="car-image" />
      <CardContent>
        <Typography variant="h6" component="div">
          {car.name} ({car.year_of_launch})
        </Typography>
        <div className="row">
          <Typography variant="body2" color="textSecondary">
            Capacity: {car.capacity}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {car.fuel_type}
          </Typography>
        </div>
        <div className="row">
          <Typography variant="body2" color="textSecondary">
            Mileage: {car.mileage}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {car.transmission}
          </Typography>
        </div>
      </CardContent>

      <CardActions className='cardFooter'>
        <Typography variant="h6" color="textPrimary">
          {car.price_per_month}
        </Typography>
        <div className="button-row">
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon className='addToFav'/>
          </IconButton>
          <Button variant="contained" color="primary">
            Rent Now
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CarCard;
