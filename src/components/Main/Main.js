import React, { Component } from 'react';
import Category from '../Main/Category/Category';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Main.css';

export default class Login extends Component {



    render() {
        return (
            <div className='main_wrapper'>
                <div className='main_nav'>
                    <div className='main_profile'>
                        <Link className='btn' to='/profile'>
                            Profile
                        </Link>
                    </div>
                    <div>
                        Bars
                        </div>
                    <a href='/auth/logout' className='btn'><div>
                        Logout
                        </div></a>
                </div>
                <Category />
            </div>
        )
    }
}