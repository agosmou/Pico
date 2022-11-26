import React, {useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate} from "react-router-dom"; //useHistory no longer supported



const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    let navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get("/");
          setRestaurants(response.data.data.restaurants);
        } catch (err) {}
      };
  
      fetchData();
    }, []);

const handleDelete = async (e, id) => { 
    e.stopPropagation(); // when the update button is selected, it wont send the event up to the table row so it wont hit this function
    try {
        const response = await RestaurantFinder.delete(`/${id}`);
        setRestaurants(
        restaurants.filter((restaurant) => {
            return restaurant.id !== id;
        })
        );
    } catch (err) {
        console.log(err);
    }
};

const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>

                <tbody>
                    {/* use return when using the map function */}
                    {restaurants && restaurants.map((restaurant) => { 
                        return (
                            // added the below unique key prop per warning message
                            <tr
                             onClick={() => handleRestaurantSelect(restaurant.id)}
                             key={restaurant.id}> 
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td> 
                                <td>reviews</td>
                                <td>
                                    <button onClick={(e) => handleUpdate
                                    (e, restaurant.id)}
                                    className="btn btn-warning"
                                    >
                                    Update</button>
                                </td>
                                <td>
                                    <button onClick={(e) => handleDelete(e, restaurant.id)} 
                                    className="btn btn-danger"
                                    >
                                    Delete</button>
                                </td>
                            </tr>
                        )
                    })}


                    {/* <tr>
                        <td>mcdonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>

                    <tr>
                        <td>mcdonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>

        </table>
        
    </div>
  )
}

export default RestaurantList