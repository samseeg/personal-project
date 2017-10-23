import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div><Link to='/categories'>
                Profile
                </Link>
                </div>
        )
    }
}