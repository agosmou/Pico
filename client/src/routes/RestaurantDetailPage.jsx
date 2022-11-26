import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get(`/${id}`);
  
          setSelectedRestaurant(response.data.data.restaurant);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData();
    }, []);  

  return (
    <div>
      {/* // only whe selectedRestaurant is defined, the program will render out the name */}
        {selectedRestaurant && selectedRestaurant.name}
    </div>
  )
}

export default RestaurantDetailPage