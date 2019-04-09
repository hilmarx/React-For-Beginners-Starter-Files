// The Mama component 
import React from 'react';
import Header from './Header';
import Fish from './Fish';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes}
        // 2. Add new objects to the copied state
        fishes[`fish${Date.now()}`] = fish
        // Set new object to state
        this.setState({
            fishes: fishes
        })
    }
    loadSampleFishes = () => {
        alert("Works")
        this.setState({
            fishes: sampleFishes
        })
    

    } 

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header name="Fresh Shit every' day"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}></Fish>)}
                    </ul>
                    
                </div>
                <Order></Order>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
            </div>
        )
    }
}

export default App;