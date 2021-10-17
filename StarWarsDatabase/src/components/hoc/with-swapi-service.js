import React from 'react';
import {SwapiConsumer} from '../swapi-service-context';


const withSwapiService = (View, mapMathodsToProps) => {
    return (props) => {
        return (
          <SwapiConsumer>
            {
              (swapiServiceObject) => {
                const data = mapMathodsToProps(swapiServiceObject)
                return (
                  <View {...props} {...data} />
                )
              }
            }
          </SwapiConsumer>
        )
    }
}

export default withSwapiService
