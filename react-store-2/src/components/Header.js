import React from 'react';

const Header = (props) => {
    return (
        <header className="top">
                <h1>Orthus 
                    <span className="ofThe">Dei's</span>
                </h1>   
                <h3 className="tagline">
                    <span>{props.name}</span>
                </h3>
        </header>
    )
}

// Same shit as this

/*

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Orthus 
                    <span className="ofThe">Dei's</span>
                </h1>   
                <h3 className="tagline">
                    <span>{this.props.name}</span>
                </h3>
            </header>
        )
    }
}
*/
export default Header;