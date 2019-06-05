import React, {Component} from 'react'
import './zipSearch.css'
import axios from 'axios'
import ZipDisplay from './zipDisplay.js'

class ZipSearch extends Component {

  constructor(props){
    super(props)

    this.state = {
      data:[]
    }
  }

  async fetchZipData(zip){

    try {
      let {data} = await axios.get('http://ctp-zip-api.herokuapp.com/zip/' + zip);
      this.setState({data});
      data.forEach(function(element){
          console.log(element);
          console.log(element.Zipcode, element.City);
      });

    } catch(err){
      console.log(err);
    }
  }

  onChangeHandle = (event) => {

      if (event.target.value.length === 5){
        console.log(event.target.value);
        //fecth data
        this.fetchZipData(event.target.value);

      } else {
          console.log("Not A Zipcode");

      }
  }

  render(){
    let place = this.state.data;
    let cityInfo = place.map((place) =>
      <div>
      <ul>
       <li>{place.Zipcode}</li>
       <li>{place.City}</li>
       <li>{place.State}</li>
       <li>{place.Lat}</li>
       <li>{place.Long}</li>
       <li>{place.EstimatedPopulation}</li>
      </ul>

      <ZipDisplay data={place}/>
      </div>
    );

    return(
       <div className="container">
          <div className="zip-search">
            <form>
              <label>
                  Zip Code
                  <input name="zipField" type="text" placeholder="try 11201" onChange={this.onChangeHandle}/>
              </label>
            </form>
            <div> {cityInfo}</div>
          </div>
       </div>
    );
  }
}
export default ZipSearch;
