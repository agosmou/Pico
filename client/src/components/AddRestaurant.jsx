import React from 'react'

const AddRestaurant = () => {    
  return (
    <div className="mb-4">
        <form action="">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder = "Name"/>
                </div>
                <div className="col">
                    <input className="form-control" type="text" placeholder="Location"/>
                </div>
                <div className="col">
                    {/* <select className="custom-select"> this can remove the margins so the webpage loads properly */}
                    <select className="custom-select">
                        {/* This first option will disable the text in the search box as it should not be a selection */}
                        <option disabled>Price Range</option> 
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>  
                    </select>
                </div>
                <button className=" btn btn-primary">Add</button>
            </div>
        </form>

    </div>
  )
}

export default AddRestaurant