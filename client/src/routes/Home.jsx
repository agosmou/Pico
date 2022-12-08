// type in rafce for the below to auto populate

import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
      <Footer />
    </div>
  )
}

export default Home