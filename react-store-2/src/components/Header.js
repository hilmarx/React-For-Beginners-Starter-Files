import React from 'react';
import PropTypes from "prop-types";

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

Header.propTypes = {
    name: PropTypes.string.isRequired
}

export default Header;