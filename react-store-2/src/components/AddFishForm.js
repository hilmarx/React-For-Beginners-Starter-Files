import React from 'react';

class AddFishForm extends React.Component {
    // Create new Fish instance 
    // 1. Store data submitted by user in state variables
    name = React.createRef();
    price = React.createRef();
    desc = React.createRef();
    image = React.createRef();
    status = React.createRef();

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.name.current.value,
            price: parseFloat(this.price.current.value) ,
            desc: this.desc.current.value,
            image: this.image.current.value,
            status: this.status.current.value
        }
        this.props.addFish(fish)
        // refresh form
        event.currentTarget.reset();
    }

    // 2. Trigger the creation of a new Fish class by channeling the respective data with props
    
    
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                
                <input type="text" ref={this.name} name="name" placeholder="Name"></input>
                <input type="number" ref={this.price} name="price" placeholder="Price"></input>
                <select name="status" ref={this.status} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.desc} placeholder="Desc"></textarea>
                <input type="image" ref={this.image} name="image" placeholder="Image"></input>
                <button type="submit">Add Fish</button>
            </form>
        ) 
    }
}

export default AddFishForm;