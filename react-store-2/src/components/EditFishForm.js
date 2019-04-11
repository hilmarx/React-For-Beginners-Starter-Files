import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers'

class EditFishForm extends React.Component {
    static propTypes = {
        deleteFish: PropTypes.func,
        fish: PropTypes.object,
        index: PropTypes.string,
        updateFish: PropTypes.func
    }

    // Function for removing a fish
    handleDelete = (event) => {
        event.preventDefault()
        this.props.deleteFish(this.props.index)
    }
    
    handleChange = (event) => {
        // Take a copy of the current oject 
        const updatedFish = {...this.props.fish, [event.currentTarget.name]: event.currentTarget.value 
        };
        this.props.updateFish(this.props.index, updatedFish)
        
    } 
    render() {
        return (
            <div className="fish-edit">
                <input type="text"  name="name" onChange={this.handleChange} value={this.props.fish.name}></input>
                <input type="number"  name="price" onChange={this.handleChange} value={formatPrice(this.props.fish.price)}></input>
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input type="image" name="image" placeholder="Image" onChange={this.handleChange} src={this.props.fish.image}></input>
                <button onClick = {this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default EditFishForm;