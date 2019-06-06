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
        <div className="zip-flex-container">
              <div className="zip-box">
                  <div><h5>{City}, {State}</h5></div>
                  <ul className="city-list">
                      <li>{Zipcode} </li>
                      <li>{State}  </li>
                      <li>{Lat},{Long} </li>
                      <li>{EstimatedPopulation}</li>
                  </ul>
              </div>
       </div>

      )

    }
}
export default ZipDisplay;
