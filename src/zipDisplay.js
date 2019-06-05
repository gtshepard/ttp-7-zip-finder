import React, {Component} from 'react'


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
          {Zipcode}
        </div>

      )

    }
}
export default ZipDisplay;
