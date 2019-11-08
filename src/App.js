import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {newUrl: [], newSymbol: [], code: [], releaseDate: []};
  }
    
componentDidMount = async() => {
  const responce = await fetch('https://api.pokemontcg.io/v1/sets');
  const data = await responce.json();
  
  let logestUrl = [];
  let symbestUrl = [];
  let arrKey = [];
  let releaseDate = []
  console.log(data.sets);
    for(let i = 0; i < data.sets.length; i++) {
        logestUrl.push(<img src={data.sets[i].logoUrl} alt='logo' className="set__image"></img>);
        symbestUrl.push(<img src={data.sets[i].symbolUrl} alt='symbol' className="set__content-image"></img>);
        arrKey.push(<div key={data.sets[i].code} className="set"></div>);
        releaseDate.push(data.sets[i].releaseDate);
    }

  this.setState({newUrl: logestUrl, newSymbol: symbestUrl, code: arrKey, releaseDate: releaseDate})
}

    render() {
        console.log(this.state);
        return (
        <div>{this.state.code}</div>
            /*<div key='{this.state.code[0]}' className="set">     
                <img  src='{this.state.newUrl[0]}' alt='logo' className="set__image"></img>
            <div className="set__content">
                <img src='{this.state.newSymbol[0]}' alt='symbol' className="set__content-image"></img>
            <div className="set__content-container">
    
            </div>
            <ul className="set__content-description">
    
            </ul>
    
            </div>
            </div>*/
        )   
    }
}