import React, { Component } from 'react';
import Main from '../Main';
import axios from 'axios';



import './Posts.css';

import { connect } from 'react-redux';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {},
            catId: {},
            post: ''
        }
    }

    //For later use when I need the user id for making posts

    componentDidMount() {
        axios.get('/currentuser')
            .then(response => {
                // console.log(response.data[0].user_id)
                this.setState({
                    userId: response.data[0].user_id
                })
            })
    }

    submit(op, cat_id, user_id) {
        axios.post('/posts', {
            op,
            cat_id,
            user_id
        })
        .then(response => {
            // console.log(response)
        })
    }


    render() {
        return (
            <div className='posts_container'>
                <Main />

                <div className='newPost'>

                    {/* input for posts */}
                    <input type='text' value={this.state.post} onChange={e => {
                        // console.log(this.state.post)
                        this.setState({
                            post: e.target.value
                        })
                    }} placeholder='Make a post' />

                    {/* submit button */}
                    <div className='subButt' onClick={() => {
                        this.submit(this.state.post, this.props.posts[0].cat_id, this.state.userId)
                    }}>Submit</div>
                    <hr />
                </div>

                {/* posts */}
                {this.props.posts.map((item, i) => {
                    // console.log(item)
                    return (
                        <div key={i}>
                            <div className='posts' key={i}>

                                <div className='user_info'>
                                    {item.user_name}
                                </div>

                                <div className='post'>
                                    {item.op}
                                </div>
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
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);