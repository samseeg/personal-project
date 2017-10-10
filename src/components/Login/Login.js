import React, {Component} from 'react';
import './Login.css';

import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className='login_wrapper'>
                <Link to='/main'><button className='loginbtn'>
                    Login / Register
                    </button></Link>
                </div>
        )
    }
}