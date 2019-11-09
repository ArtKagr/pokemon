import React from 'react';
import './App.css';

export default class Card extends React.Component {
    constructor(props){
      super(props)
      this.state = {link: [], mode: this.props.code};
    }
    componentDidMount = async() => {
        const responce = await fetch(`https://api.pokemontcg.io/v1/cards?setCode=${this.props.code}`);
        const data = await responce.json();

        let arrCard = [];

        for(let i = data.cards.length - 1; i >= 0; i--) {
            arrCard.push(
                <img key={data.cards[i].id} src={data.cards[i].imageUrl} alt='logo' className="card"></img>
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