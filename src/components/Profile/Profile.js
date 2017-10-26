import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './Profile.css';

import { userPostsPull, emptyPosts } from '../../ducks/users';

import Main from '../Main/Main';
import smiley from './smiley.svg';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {},
            newUserName: '',
            edit: false
        }
    }


    componentDidMount() {
        axios.get('currentuser')
            .then(response => {
                this.setState({
                    userId: response.data[0]
                })

                // console.log(this.state.userId)
                this.props.emptyPosts()
                this.props.userPostsPull(this.state.userId.user_id)
            })

    }

    deletePost(post) {
        
    }




    render() {
        return (
            <div className='profile_wrapper'>
                <div>
                    <Main />
                </div>
                <div className='profile'>
                    <img className='profile_pic' src={this.state.userId.img} alt='profile avatar' />
                    <div className='profile_name'>
                        <div>
                            {this.state.userId.user_name}
                        </div>
                        <img src={smiley} alt='smiley' />
                    </div>
                    <div>
                        Your Posts
                        </div>
                </div>

                {this.props.posts.map((item, i) => {


                    return (
                        <div key={i} className='outer_post'>
                            <div className='posts' key={i}>

                                <Link key={i} className='link' to={`/categories/${this.props.match.params.id}/${item.op_id}`}>
                                    <div className='post'>
                                        {item.op}
                                    </div>
                                </Link>
                            </div>

                        </div>
                    )


                })}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        user: state.user
    }
}

export default connect(mapStateToProps, {
    userPostsPull: userPostsPull,
    emptyPosts: emptyPosts
})(Profile);