import React, { Component } from 'react';
import Main from '../Main';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { postPull } from '../../../ducks/users';

import './Posts.css';

import { connect } from 'react-redux';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {},
            post: ''
        }
        this.submit = this.submit.bind(this)
    }

    //user and URL params for posts display

    componentDidMount() {
        axios.get('/currentuser')
            .then(response => {
                // console.log()
                this.setState({
                    userId: response.data[0].user_id
                })
            })

        // console.log(this.props.match.params.id)

        this.props.postPull(this.props.match.params.id)
    }

    submit(op, cat_id, user_id) {
        axios.post('/posts', {
            op,
            cat_id,
            user_id
        })
            .then(response => {

                this.props.postPull(this.props.match.params.id);
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
                    <textarea type='text' value={this.state.post} onChange={e => {
                        // console.log(this.state.post)
                        this.setState({
                            post: e.target.value
                        })
                    }} placeholder='Make a post' />

                    {this.state.post ?
                        <div className='subButt' onClick={() => {
                            this.submit(this.state.post, this.props.posts[0].cat_id, this.state.userId)
                        }}>Submit</div>
                        : null}
                </div>

                {/* posts */}
                {this.props.posts.map((item, i) => {
                    // console.log()
                    return (
                        <div key={i} className='outer_post'>
                            <div className='posts' key={i}>

                                <div className='user_info'>
                                    <img className='avatar' src={item.img} alt='avatar' />
                                    <div className='user_name'>
                                        {item.user_name}
                                    </div>
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
    postPull: postPull
})(Posts);