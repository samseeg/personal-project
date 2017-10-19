import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Posts extends Component {

    // userPost(user_id) {
    //     axios.get(`/user/${user_id}`)
    //     .then(response => {

    //     })
    // }

    render() {
        return (
            <div className='posts_container'>
                {this.props.posts.map((item, i) => {
                    // console.log(item)
                    return (
                            <div className='posts' key={i}>{item.op}</div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);