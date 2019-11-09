import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {set: []};
  }
    
componentDidMount = async() => {
  const responce = await fetch('https://api.pokemontcg.io/v1/sets');
  const data = await responce.json();

  let arrSet = [];

  this.standardLegal = <li></li>;
  this.expandedLegal = <li></li>;
  
    for(let i = data.sets.length - 1; i >= 0; i--) {

      if(data.sets[i].standardLegal === true){
        this.standardLegal = <li>StandardLegal</li>;
      } else {
        this.standardLegal = <li></li>;
      }
      if(data.sets[i].expandedLegal === true){
        this.expandedLegal = <li>ExpandedLegal</li>;
      } else {
        this.expandedLegal = <li></li>;
      }


      arrSet.push(<div data-code={data.sets[i].code} key={data.sets[i].code} className="set">
        <img src={data.sets[i].logoUrl} alt='logo' className="set__image"></img>
        <div className="set__content">
          <img src={data.sets[i].symbolUrl} alt='symbol' className="set__content-image"></img>
        <div className="set__content-container">
          <h1 className="set__content-title">{data.sets[i].name}</h1>
          <h2 className="set__content-subtitle">Released {data.sets[i].releaseDate}</h2>
        </div>
        <ul className="set__content-description">
          <li>
            {this.standardLegal}
          </li>
          <li>
            {this.expandedLegal}
          </li>
        </ul>
        </div>
      </div>);
    }
    /*let dust = [];
    for(let i = data.sets.length - 1; i >= 0; i--) {
    const responceCard = await fetch(`https://api.pokemontcg.io/v1/cards?setCode=${data.sets[i].code}`)
    const dataCard = await responceCard.json();
    dust.push(dataCard);
  }
    for(let i = dust.length - 1; i >= 0; i--) {

      arrCard.push(<div data-code={dust.cards[i].id} key={dust.cards[i].id} className="card">
        <img src={dust.cards[i].imageUrl} alt='logo' className="card"></img>
      </div>);
    }*/

  this.setState({set: arrSet});
}
    render() {
      console.log(this.state);
          return (
            <div className="set-list" onClick={function(e) {
              console.log(e.target.getAttribute('data-code'))
              /*this.setState({set: this.state.card})*/}}>
              {this.state.set}
            </div>
        )
    }
}