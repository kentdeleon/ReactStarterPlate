import React, {Component} from 'react';
import {render} from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';
import './components/style.css';

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <HelloWorld className="MP" message="Hello World from Parent component!"/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));