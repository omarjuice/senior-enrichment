import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome!
                <Link to="/students">Students</Link>
                <Link to="/campuses">Campuses</Link>
            </div>
        );
    }
}

export default Welcome;
