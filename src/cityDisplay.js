import React, {Component} from 'react'


class CityDisplay extends Component {

    constructor(props){
        super(props)
    }

    render(){
        let zip = this.props.data

        return(
          <div className="city-flex-container">
             <div className="city-box">
               <div>{zip}</div>
             </div>
          </div>
      )
    }
}
export default CityDisplay;
