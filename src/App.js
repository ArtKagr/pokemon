import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {arr: [], class: "button button_is-closed"};
    this.changeArray = this.changeArray.bind(this);
    this.secondChangeArray = this.secondChangeArray.bind(this);
  }
  
componentDidMount = async() => {
  const responce = await fetch('https://api.pokemontcg.io/v1/sets');
  const data = await responce.json();
  console.log(data);

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

  this.setState({arr: arrSet});
}
changeArray = async(e) => {
  if(e.target.classList.contains('set') || e.target.parentElement.classList.contains('set')) {
    let dataCode = e.target.getAttribute('data-code');
    if(dataCode === null) {
      dataCode = e.target.parentElement.getAttribute('data-code');
    }
    const rezboze = await fetch(`https://api.pokemontcg.io/v1/cards?setCode=${dataCode}`);
    const datoze = await rezboze.json();

  let arrCard = [];

      for(let i = datoze.cards.length - 1; i >= 0; i--) {
          arrCard.push(
              <img key={datoze.cards[i].id} src={datoze.cards[i].imageUrl} alt='logo' className="card"></img>
          )
      }
  this.setState({arr: arrCard, class: "button"})
}
}
secondChangeArray = async() => {
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

  this.setState({arr: arrSet, class: "button button_is-closed"});
}
    render() {
          return (
            <div>
            <button className={this.state.class} onClick={() => {this.secondChangeArray()}}>Назад</button>
            <div className="set-list" onClick={(e) => {this.changeArray(e)}} >
              {window.scrollTo(0,0)}
              {this.state.arr}
            </div>
            </div>
        )
    }
}


