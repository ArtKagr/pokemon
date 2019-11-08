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

  let logestUrl = [];
  let symbestUrl = [];
  
    for(let i = 0; i < data.sets.length; i++) {
        logestUrl.push(data.sets[i].logoUrl);
        symbestUrl.push(data.sets[i].symbolUrl);
    }

  this.setState({newUrl: logestUrl, newSymbol: symbestUrl})
}

    render() {
        console.log(this.state);
        return (
            <div className="set">     
                <img src={this.state.newUrl[0]} alt='logo' className="set__image"></img>
            <div className="set__content">
                <img src={this.state.newSymbol[0]} alt='symbol' className="set__content-image"></img>
            <div className="set__content-container">
    
            </div>
            <ul className="set__content-description">
    
            </ul>
    
            </div>
            </div>
        )   
    }
}