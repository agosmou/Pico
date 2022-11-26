// this is the parent app that will wrap the entire application
import React from 'react';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"; // library
import Home from "./routes/Home" // "./" is current directory
import UpdatePage from "./routes/UpdatePage"
import RestaurantDetailPage from "./routes/RestaurantDetailPage"
import { RestaurantsContextProvider } from './context/RestaurantsContext';


const App = () => {
    return (
        // the container below keeps the table from taking up the whole webpage width.. contains it.
        <RestaurantsContextProvider>
            <div className="container">           
                <Router>  
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/restaurants/:id/update" element={<UpdatePage/>}/>
                        <Route exact path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvider>
        
    );
};

export default App;