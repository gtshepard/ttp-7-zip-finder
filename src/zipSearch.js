import React, {Component} from 'react'
import './zipSearch.css'
import axios from 'axios'

class ZipSearch extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: [
          {
            id: '11201',
            city: 'brooklyn',
            state: 'NY',
            location: '(40.71, -73.99)',
            popEstimate: '1234567',
            totalWages: '88888654'
        }
      ]
    }
  }

  async fetchZipData(zip){

    try {
      let {data} = await axios.get('http://ctp-zip-api.herokuapp.com/zip/' + zip);

      data.forEach(function(element){
          console.log(element);
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
    return(
       <div className="container">
          <div className="zip-search">
            <form>
              <label>
                  Zip Code
                  <input name="zipField" value={this.state.id} type="text" placeholder="try 11201" onChange={this.onChangeHandle}/>
              </label>
            </form>
          </div>
       </div>
    );
  }
}
export default ZipSearch;
