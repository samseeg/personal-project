import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {emptyPosts} from '../../ducks/users';
import './Main.css';

class Main extends Component {
   



    render() {
        return (
            <div className='main_wrapper'>
                <div className='main_nav'>
                    <div className='main_profile'>
                        <Link className='btn' to={`/profile/${this.props.currentUser.user_id}`}>
                            Profile
                        </Link>
                    </div>
                    <div className='name'>
                        baarzz
                        </div>
                    <a href='/auth/logout' className='btn'><div>
                        Logout
                        </div></a>

                    
                </div>
                <hr/>
                
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, {emptyPosts: emptyPosts})(Main);