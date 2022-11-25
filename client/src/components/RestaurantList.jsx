import React, {useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';



const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get("/");
          setRestaurants(response.data.data.restaurants);
        } catch (err) {}
      };
  
      fetchData();
    }, []);


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
                            <tr key={restaurant.id}> 
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td> 
                                <td>reviews</td>
                                <td>
                                    <button className="btn btn-warning">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
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