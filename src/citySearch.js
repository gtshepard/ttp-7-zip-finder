import React, {Component} from 'react'
import './citySearch.css'
import CityDisplay from './cityDisplay.js'
import axios from 'axios'
class CitySearch extends Component {

   constructor(props){
       super(props)
       this.state = {
          data:[]
       }
   }

   async fetchCityData(city){
       try {
         let {data} = await axios.get('http://ctp-zip-api.herokuapp.com/city/' + city);
         this.setState({data});
         console.log(data);
       } catch(err) {
         console.log(err);
       }
   }
   onChangeHandle = (event) => {
     console.log(event.target.value);
     this.fetchCityData(event.target.value);
   }

    render(){
      let place = this.state.data;
      let cityZips = place.map((place) =>
        <CityDisplay data={place}/>
      );

      return (
        <div className="city-con">
            <div className="city-search">
               <form>
                  <label className="form-label">
                    City
                    <input type="text" placeholder="try Brooklyn" onChange={this.onChangeHandle}/>
                  </label>
               </form>
            </div>
            {cityZips}
        </div>
      )
    }
}

export default CitySearch;
