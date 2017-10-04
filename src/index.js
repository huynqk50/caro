import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Game extends React.Component {
    render() {
        return (
                <div className="game">
                <div className="board">
                <Board/>
                </div>
                </div>
        );
    }
}

class Board extends React.Component {
    render() {
        return 
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
