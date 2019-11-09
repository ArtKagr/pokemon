import React from 'react';
import './App.css';

export default class Card extends React.Component {
    constructor(props){
      super(props)
      this.state = {link: []};
    }
    componentDidMount = async() => {
        const responce = await fetch(`https://api.pokemontcg.io/v1/cards?setCode=sm1`);
        const data = await responce.json();
        console.log(data)

        let arrCard = [];

        for(let i = data.cards.length - 1; i >= 0; i--) {
            arrCard.push(
                <img src={data.cards[i].imageUrl} alt='logo' className="card"></img>
            )
        }
        this.setState({link: arrCard});
    }
    render(){
        return(
            <div>
                {this.state.link}
            </div>
        )
    }
}