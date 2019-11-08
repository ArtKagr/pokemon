import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {newUrl: [], newSymbol: []};
  }
    

componentDidMount = async() => {
  const responce = await fetch('https://api.pokemontcg.io/v1/sets');
  const data = await responce.json();
  let url = data.sets.reduce(function(preval, item, index) {
    
    return {logoUrl: <img key={index} src={item.logoUrl} alt='logo' className="set__image"></img>, 
            symbolUrl: <img key={index} src={item.symbolUrl} alt='symbol' className="set__content-image"></img>};
  })
  this.setState({newUrl: url.logoUrl, newSymbol: url.symbolUrl})
  console.log(this.state);


}
  render() {
    return (
    <div className="set">     
      {this.state.newUrl}
      <div className="set__content">
      {this.state.newSymbol}
        <div className="set__content-container">
        </div>
        <ul className="set__content-description">

        </ul>

    </div>
    </div>
    )
}
}
