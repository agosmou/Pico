import React, { useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
    const { addRestaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range"); // This selects the default value as "Price Range" instead of any of the $ value options

    const handleSubmit = async (e) => { // event object passed into object. 
        e.preventDefault(); // default behavior in html is to reload page, however in React this will cause us to lose our state. So this must be prevented
        try {
            const response = await RestaurantFinder.post("/", { //post method to send data back
                name,
                location,
                price_range: priceRange,
            });
            addRestaurants(response.data.data.restaurant);
            console.log(response);
            //console.log(response.data.data);
            //addRestaurants(response.data.data.restaurant);
        } catch (err) {
            //console.log(err);
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Location"
                        />
                    </div>
                    <div className="col">
                        {/* <select className="custom-select"> this can remove the margins so the webpage loads properly */}
                        <select
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="custom-select"
                        >
                            {/* This first option will disable the text in the search box as it should not be a selection */}
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button
                        onClick={handleSubmit} // onClick event handler
                        type="submit"
                        className="btn btn-warning"
                    >
                        Add</button>
                </div>
            </form>

        </div>
    )
}

export default AddRestaurant