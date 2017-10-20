import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {emptyPosts} from '../../ducks/users';
// import axios from 'axios';
import './Main.css';

class Main extends Component {



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
                
                <Link to='/category' className='cat_title link'><div className='cat_title' onClick={() => this.props.emptyPosts()}>
                        Categories
                </div>
                </Link>
            </div>
        )
    }
}


export default connect(null, {emptyPosts: emptyPosts})(Main);