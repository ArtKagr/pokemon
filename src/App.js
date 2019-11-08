import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {code: []};
  }
    
componentDidMount = async() => {
  const responce = await fetch('https://api.pokemontcg.io/v1/sets');
  const data = await responce.json();
  console.log(data.sets);
  let arrKey = [];
  this.standardLegal = <li></li>;
  this.expandedLegal = <li></li>;

    for(let i = 0; i < data.sets.length; i++) {

        if(data.sets[i].standardLegal === true){
          this.standardLegal = <li>StandardLegal</li>;
        }
        if(data.sets[i].expandedLegal === true){
          this.expandedLegal = <li>ExpandedLegal</li>;
        }

        arrKey.push(<div key={data.sets[i].code} className="set">
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

  this.setState({code: arrKey})
}

    render() {
          return (
            <div className="set-list">{this.state.code}</div>
        )
    }
}