// 3 Stages of creating a react component

// 1. Import React
// 2. Create Class
// 3. Export class to main file
import React from 'react'
import { getFunName, slugify } from '../helpers';


// Create React Component as class
class StorePicker extends React.Component {
    userInput = React.createRef();

    goToStore = event => {
        // Stop Form from  submitting
        event.preventDefault();
        // Get text from input
        const store = this.userInput.current.value
        // Change the store to /store/userinput with Push state
        this.props.history.push(`/store/${store}`);
         
    }
    
    // Every component needs at least one method called render()
    render() {
        return (
                <form className="store-selector" onSubmit={this.goToStore}> 
                    <h2>Please Enter a store</h2>
                    <input 
                        ref={this.userInput} 
                        type="text" 
                        required 
                        placeholder="Store Name"
                        defaultValue={getFunName()}
                    />
                    <button type="submit"> Visit Store</button>
                </form>
        
        )
    }
}

export default StorePicker;