import React from 'react';
import {ItemDetails, Record} from '../item-details';
import {withSwapiService} from '../hoc'


const mapMathodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage
  }
}


const PlanetDetail = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label='Name' fieldName='name' />
    </ItemDetails>
  )
}


export default withSwapiService( PlanetDetail, mapMathodsToProps);
