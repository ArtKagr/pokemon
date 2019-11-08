import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {};
  }
    

componentDidMount = async() => {
  const responce = await fetch('https://api.pokemontcg.io/v1/sets');
  const data = await responce.json();

  let logoUrl = data.sets.map(function(item){
    return item.logoUrl;
  })
  let symbolUrl = data.sets.map(function(item){
    return item.symbolUrl;
  })
      for(let i = 0; i < logoUrl.length; i++){
        setInterval(() => {
        let nogoUrl = logoUrl[i];
        this.setState({nogoUrl});
        let nogoSymbol = symbolUrl[i];
        this.setState({nogoSymbol});
      }, 1000);
      }


}
  render() {
    return (
    <div className="set">     
      <img src={this.state.nogoUrl} className="set__image" alt="logo"></img>
      <div className="set__content">
        <img src={this.state.nogoSymbol} className="set__content-image" alt="logo"></img>
        <div className="set__content-container">
        </div>
        <ul className="set__content-description">

        </ul>

    </div>
    </div>
    )
}
}
