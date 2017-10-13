import React, { Component } from 'react';
import Category from '../Main/Category/Category';
import './Main.css';

// import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className='main_wrapper'>
                <div className='main_nav'>
                    <a href='/profile' className='btn'><div className='main_profile'>
                        Profile
                    </div></a>
                    <div>
                        Bars
                        </div>
                    <a href='/auth/logout' className='btn'><div>
                        Logout
                        </div></a>
                </div>
                <Category/>
            </div>
        )
    }
}