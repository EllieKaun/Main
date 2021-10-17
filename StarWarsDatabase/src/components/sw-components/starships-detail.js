import React from 'react';
import {ItemDetails, Record} from '../item-details';
import {withSwapiService} from '../hoc'


const mapMathodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage,
  }
}


const StarshipDetail = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label='Name' fieldName='name' />

    </ItemDetails>
  )
}


export default withSwapiService(StarshipDetail, mapMathodsToProps);
