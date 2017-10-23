import React, { Component } from 'react';
import Main from '../Main';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {catClick} from '../../../ducks/users';

import './Posts.css';

import { connect } from 'react-redux';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {},
            post: ''
        }
    }

    //user and URL params for posts display

    componentDidMount() {
        axios.get('/currentuser')
            .then(response => {
                // console.log(response.data[0].user_id)
                this.setState({
                    userId: response.data[0].user_id
                })
            })

            // console.log(this.props.match.params.id)

            this.props.catClick(this.props.match.params.id)
    }

    submit(op, cat_id, user_id) {
        axios.post('/posts', {
            op,
            cat_id,
            user_id
        })
        .then(response => {

        this.props.catClick(this.props.match.params.id);
        })

        this.setState({
            post: ''
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
        posts: state.posts
    }
}

export default connect(mapStateToProps, {
    catClick: catClick
})(Posts);