import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Card from './Card'
import './App.css';
import * as serviceWorker from './serviceWorker';


class RenderList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    render(){
        return (
           false ? (<App/>) : (<Card/>)
        )
    }
}



ReactDOM.render(<RenderList/>, document.getElementById('root'));

serviceWorker.unregister();