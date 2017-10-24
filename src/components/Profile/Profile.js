import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {}
        }
    }


    componentDidMount() {
        axios.get('currentuser')
            .then(response => {
                console.log(response.data[0].img)
                this.setState({
                    userId: response.data[0]
                })
            })
    }


    render() {
        return (
            <div className='profile_wrapper'>
                <div><Link to='/categories'>
                    Categories
                </Link>
                </div>
                <div className='profile'>
                    <img className='profile_pic' src={this.state.userId.img} alt='profile avatar' />
                    <div className='profile_name'>
                        {this.state.userId.user_name}
                        </div>
                    </div>
            </div>
        )
    }
}