import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";


 const UpdateRestaurant = (props) => {
    const {id} = useParams();
    let navigate = useNavigate();
    const { restaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

 useEffect(() => {
    const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data);
        setName(response.data.data.restaurant.name); // these methods will set the default inputs into the boxes
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchData(); // must run fetch function
    }, []); // pass in empty dependency array

 const handleSubmit = async (e) => {
    e.preventDefault(); //prevents page reload
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
    });
    navigate("/");
};

    return (
        <div>
            <form action="">

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     id="name" 
                     className="form-control" 
                     type="text"
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                     value={location}
                     onChange={(e) => setLocation(e.target.value)}
                     id="location" 
                     className="form-control" 
                     type="text"
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input
                     value={priceRange}
                     onChange={(e) => setPriceRange(e.target.value)}
                     id="price_range" 
                     className="form-control" 
                     type="number"
                     />
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>

            </form>

        </div>
    )

};

export default UpdateRestaurant;