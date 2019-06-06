import React, {Component} from 'react'

import './zipDisplay.css'
class ZipDisplay extends Component {

    constructor(props){
        super(props)
    }

    render(){
      let {
        Zipcode,
        City,
        State,
        Lat,
        Long,
        EstimatedPopulation
      } = this.props.data

      return(
        <div>
          <ul className="container">
          <div className="zip-display">
              <div className="head">
                <h6> {City}, {State}</h6>
              </div>
                <ul className="city-list">
                    <li>{Zipcode}, </li>
                    <li>{State},  </li>
                    <li>location: {Lat},{Long}, </li>
                    <li>Population: {EstimatedPopulation}</li>
                 </ul>
            </div>
            </ul>
        </div>

      )

    }
}
export default ZipDisplay;
