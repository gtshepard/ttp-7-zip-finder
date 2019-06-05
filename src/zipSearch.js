import React, {Component} from 'react'
import './zipSearch.css'


class ZipSearch extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: [
          {
            zip: '11201',
            city: 'brooklyn',
            state: 'NY',
            location: '(40.71, -73.99)',
            popEstimate: '1234567',
            totalWages: '88888654'
        }
      ]
    }
  }

  onChangeHandle = (event) => {

      if (event.target.value.length === 5){
        console.log(event.target.value);
        //fecth data 
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
                  <input name="zipField" value={this.state.zip} type="text" placeholder="try 11201" onChange={this.onChangeHandle}/>
              </label>
            </form>
          </div>
       </div>
    );
  }
}
export default ZipSearch;
