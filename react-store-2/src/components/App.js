// The Mama component 
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Fish from './Fish';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import base from '../base'

class App extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                storeId: PropTypes.string
            })
        })
    }

    state = {
        fishes: {},
        order: {}
    };

    // Get params of the url and create an instance of the store and its state in firebase
    componentDidMount() {
        const params = this.props.match.params;
        // reinstate local storage 
        const localStorageRef = localStorage.getItem(params.storeId)
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    // Local Storage config
    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        )
    }

    // Avoid memory leackages
    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes}
        fishes[key] = updatedFish;
        this.setState({ fishes })
    }

    deleteFish = (key) => {
        const fishes = this.state.fishes;
        fishes[key] = null;
        this.setState({ fishes })
    }

    addToOrder = key => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({order: order})
    }

    deleteFromOrder = key => {
        const order = { ...this.state.order }
        /*if (order[key] > 1) {
            order[key] = order[key] - 1
        } else {
            order[key] = 0;
        }
        */
        delete order[key];
        this.setState( {order} );
    }

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
                        {Object.keys(this.state.fishes).map(key => <Fish 
                            addToOrder={this.addToOrder} 
                            key={key} 
                            index={key}
                            details={this.state.fishes[key]}>  
                        </Fish>)}
                    </ul>
                    
                </div>
                <Order 
                    fishes={this.state.fishes} 
                    index={this.key}
                    order={this.state.order} 
                    addToOrder={this.addToOrder}
                    deleteFromOrder = {this.deleteFromOrder}>   
                </Order>
                <Inventory 
                    fishes={this.state.fishes} 
                    updateFish={this.updateFish} 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    deleteFish={this.deleteFish}
                    storeId={this.props.match.params.storeId}>
                    
                    </Inventory>
            </div>
        )
    }
}

export default App;