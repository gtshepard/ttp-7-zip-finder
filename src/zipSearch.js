import React, {Component} from 'react'
import './zipSearch.css'


class ZipSearch extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
       <div className="container">
          <div className="zip-search">
            <form>
              <label>
                  Zip Code
                  <input name="zipField" type="text" placeholder="try 11201"/>
              </label>
            </form>
          </div>
       </div>
    );
  }
}
export default ZipSearch;
