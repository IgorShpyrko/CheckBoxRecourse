import React from 'react';
import CarsList from '../containers/cars-list';
import Details from '../containers/details';

const WebPage = () => {
  return(
    <div>
      <h3>Cars:</h3>
      <CarsList />
      <hr />
      <h3>Details:</h3>
      <Details />
    </div>
  )
}

export default WebPage;