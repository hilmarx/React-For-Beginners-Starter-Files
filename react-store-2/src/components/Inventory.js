import React from 'react';
import PropTypes from 'prop-types'
import firebase  from 'firebase'
import base, { firebaseApp } from '../base'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm' 
import Login from './Login'


class Inventory extends React.Component {
    static propTypes = {
        addFish: PropTypes.func,
        deleteFish: PropTypes.func,
        fishes: PropTypes.object,
        loadSampleFishes: PropTypes.func,
        updateFish: PropTypes.func
    }

    state = {
        uid: null,
        owner: null
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({ user })
            }
        })
    }
    
    authHandler = async (authData) => {
        console.log(authData)
        const store = await base.fetch(this.props.storeId, { context: this })
        if (!store.owner) {
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
    }
    
    
    logout = async () => {
        console.log("loggin out")
        await firebase.auth().signOut()
        this.setState({ uid: null});
    }

    authenticate = (auth) => {
        const authProvider = new firebase.auth.TwitterAuthProvider()
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
    }

    render() {

        // Log out button
        const logout = <button onClick={this.logout}>LogOut</button>

        if(!this.state.uid) {
            return <Login authenticate={this.authenticate}></Login>
        }
        if(!this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>
                        Sorry you are not the owner
                    </p>
                    {logout}
                </div>
            )
        }

        return (
            <div className="Inventory"> 
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => <EditFishForm 
                    key={key} 
                    index={key}
                    fish={this.props.fishes[key]} 
                    updateFish={this.props.updateFish}
                    deleteFish={this.props.deleteFish}
                >
                </EditFishForm>)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;