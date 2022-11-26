import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get(`/${id}`);
  
          setSelectedRestaurant(response.data.data);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData();
    }, []);  

  return (
    <div>
      {/* // only whe selectedRestaurant is defined, the program will render out the name */}
        {selectedRestaurant && (
          <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className='mt-3'>
            {/* pass a drop down with access to selected restaurants */}
            <Reviews reviews={selectedRestaurant.reviews}/> 
            <div>
              <AddReview/>
            </div>
            

          </div>
          </>

        )
        }
    </div>
  )
}

export default RestaurantDetailPage