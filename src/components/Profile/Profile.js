import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profile.css';

import { userPostsPull, emptyPosts } from '../../ducks/users';

import Main from '../Main/Main';
import smiley from './smiley.svg';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUserName: '',
            edit: false
        }
        this.deletePost = this.deletePost.bind(this);
    }


    componentDidMount() {
        this.props.emptyPosts()
        this.props.userPostsPull(this.props.currentUser.user_id)
        // console.log(this.props.currentUser)
    }

    deletePost(id) {
        axios.delete(`/deletepost/${id}`)
            .then(response => {
                this.props.userPostsPull(this.props.currentUser.user_id)
            })
            axios.delete(`/deletecomments/${id}`)
    }




    render() {
        return (
            <div className='profile_wrapper'>
                <div>
                    <Main />

                    <div>
                <Link to={`/categories`} className='cat_title link'><div className='cat_title' onClick={() => this.props.emptyPosts()}>
                        Categories
                </div>
                </Link>
                </div>

                <hr className='cat_sep'/>

                </div>
                <div className='profile'>
                    <img className='profile_pic' src={this.props.currentUser.img} alt='profile avatar' />
                    <div className='profile_name'>
                        <div>
                            {this.props.currentUser.user_name}
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
                            <div className='delete_post' onClick={() => {
                                // console.log(item.op_id)
                                this.deletePost(item.op_id)
                            }}>
                                delete
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
        user: state.user,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {
    userPostsPull,
    emptyPosts
})(Profile);