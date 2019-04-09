import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
            <form onSubmit={this.goToStore} className="store-selector">
                <h2>Please Enter a Store Name</h2>
                <input 
                    type="text" 
                    required 
                    ref={this.myInput}
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                ></input>
                <button  type="submit">Visit Store =></button>
            </form>
        )
    }
}

export default StorePicker;
